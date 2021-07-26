import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CategoryService } from '@services/category.service';
import { Router } from '@angular/router';
import { ImageHandlerService } from '@services/image-handler.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy, AfterViewInit {

  colors: string[] = [
    '#FFFAFA',
    '#F0FFF0',
    '#F5FFFA',
    '#F0FFFF',
    '#F0F8FF',
    '#F8F8FF',
    '#F5F5F5',
    '#FFF5EE',
    '#F5F5DC',
    '#FDF5E6',
    '#FFFAF0',
    '#FFFFF0',
    '#FAEBD7',
    '#FAF0E6',
    '#FFF0F5',
    '#FFE4E1']

  form = new FormGroup({
    name: new FormControl( '', Validators.required ),
    bgColor: new FormControl( '', Validators.required )
    });

  imagePreview = '';
  categories : any[] = [];
  subs: Subscription[] = [];
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name', 'status'];
  file!: File;
  @ViewChild( MatPaginator ) paginator!: MatPaginator;

  constructor(
    private toastr :ToastrService,
    private category$: CategoryService,
    private _router: Router,
    private iHandler: ImageHandlerService
    ) { }

  ngOnDestroy(): void { this.subs.map( s => s.unsubscribe() ); }

  ngOnInit(): void {
    this.getCategories();
  }

  ngAfterViewInit(): void {

    if ( this.dataSource ) {
      this.paginator._intl.firstPageLabel = 'Primera página';
      this.paginator._intl.itemsPerPageLabel = 'Categorías por página';
      this.paginator._intl.lastPageLabel = 'Última página';
      this.paginator._intl.nextPageLabel = 'Siguiente página';
      this.paginator._intl.previousPageLabel = 'Página anterior';
      this.dataSource.paginator = this.paginator;
    }
  }

  getCategories(): void {
    const s = this.category$.fetch()
    .subscribe(
      ( data: any ) => {
        this.categories = data.payload.map( ( d: any ) =>
        ({ name: d.name, status: String(d.status), id: d._id })
      );
        this.dataSource.data = this.categories;

      },
      (err: HttpErrorResponse) => this.handleError( err )
    );
    this.subs.push( s );
  }

  dropCollection(): void {
    const s = this.category$.dropCollection()
    .subscribe(
      _ => this.getCategories(),
      (err: HttpErrorResponse) => this.handleError( err )
    );
    this.subs.push( s );
  }

  submit() {
    if ( this.form.valid && this.file ) {
      const name = this.form.get('name')?.value;
      const bgColor = this.form.get('bgColor')?.value ;

      const formData = new FormData();
      formData.append('restaurant','60d3f0799d493162042a915c');
      formData.append('name', name);
      formData.append('bgColor', bgColor);
      formData.append('image', this.file)

      const sub = this.category$.save( formData )
      .subscribe(
       _ => {
          this.toastr.success(`${ name } se agregó correctamente`, 'Hecho!');
          this.getCategories();
          this.form.reset();
          this.imagePreview = '';
        },
        ( (err: HttpErrorResponse) => this.handleError( err ) )
      );

      this.subs.push( sub );


    }
  }

  handleError( err: HttpErrorResponse): void {
    console.log( err );
      let errors;
      let title;
      let message;
    if( err.error.message  ) {
      errors = '';
      title  = 'Ocurrió un error interno';
      message = err.error.message;
    } else {
      errors   = err.error.errors.map( (e: any) => e.value).join('\n');
      title    = err.error.response.title;
      message  = `(${ err.error.response.message })`;
    }
    this.toastr.error( `${message} ${ errors }`, title );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  toggleVisibility( row: any ): void {
    const status = row.status === 'true';
    const id     = row.id;
    this.category$.update( '', status, id )
    .subscribe(
      _ => this.toastr.success(`Se actualizó correctamente`, 'Hecho!'),
      (err: HttpErrorResponse) => this.handleError( err )
    )
  }

  showEdit(id:string) :void{
    this._router.navigateByUrl(`categories/edit/${id}`);
  }

  uploadFile(file: any ):void{
    const input = file as HTMLInputElement;
    if( input && input.files ) {
      this.file = input.files[0];
      this.iHandler.handler( this.file )
      .then( res => this.imagePreview = res );
    }
  }
}

