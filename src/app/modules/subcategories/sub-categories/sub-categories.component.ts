import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { SubCategoryService } from 'shared/services/sub-category.service';
import { CategoryService } from '@services/category.service';
import { ImageHandlerService } from '@services/image-handler.service';


@Component({
  selector: 'subCategories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubcategoriesComponent implements OnInit, OnDestroy, AfterViewInit {
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
    category: new FormControl( '', Validators.required ),
    bgColor: new FormControl( '', Validators.required )
  });
  
  imagePreview = '';
  subCategories : any[] = [];
  categories: any[]     = []
  subs: Subscription[]  = [];
  categories$!: Observable<any>;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name',  'category', 'status'];
  file!: File;
  @ViewChild( MatPaginator ) paginator!: MatPaginator;

  constructor(
    private toastr :ToastrService,
    private subCategory$: SubCategoryService,
    private category$: CategoryService,
    private iHandler: ImageHandlerService,
    ) { }

  ngOnDestroy(): void { this.subs.map( s => s.unsubscribe() ); }

  ngOnInit(): void {
    this.getSubCategories();
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
    this.categories$ = this.category$.fetch()
  }

  getSubCategories(): void {
    const s = this.subCategory$.fetch()
    .subscribe(
      ( {payload} ) => {
        this.subCategories = payload.map( ( d: any ) =>
        (
          {
            name: d.name,
            status: String(d.status),
            id: d._id,
            category: d.category?.name || 'Categoría no identificada'
          }
        )
      );
        this.dataSource.data = this.subCategories;

      },
      (err: HttpErrorResponse) => this.handleError( err )
    );
    this.subs.push( s );
  }

  dropCollection(): void {
    const s = this.subCategory$.dropCollection()
    .subscribe(
      _ => this.getSubCategories(),
      (err: HttpErrorResponse) => this.handleError( err )
    );
    this.subs.push( s );
  }

  submit() {
    if ( this.form.valid && this.file ) {
      const name = this.form.get('name')?.value;
      const bgColor = this.form.get('bgColor')?.value ;
      const category = this.form.get('category')?.value;

      const formData = new FormData();
      formData.append('restaurant','60d3f0799d493162042a915c');
      formData.append('name', name);
      formData.append('category', category);
      formData.append('bgColor', bgColor);
      formData.append('image', this.file)

      const sub = this.subCategory$.save( formData )
      .subscribe(
       _ => {
          this.toastr.success(`${ name } se agregó correctamente`, 'Hecho!');
          this.getSubCategories();
          this.form.reset();
        },
        ( (err: HttpErrorResponse) => this.handleError( err ) )
      );
      this.subs.push( sub );
    }
  }

  validImage(){
    if(!this.file){this.toastr.error('Es necesaria una imagen' , 'Formulario incompleto')}
  }

  handleError( err: HttpErrorResponse): void {
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
    this.subCategory$.update( status, id )
    .subscribe(
      _ => this.toastr.success(`Se actualizó correctamente`, 'Hecho!'),
      (err: HttpErrorResponse) => this.handleError( err )
    )
  }

  uploadFile(file: any ):void{
    const input = file as HTMLInputElement;
    if( input && input.files ) {
      const fileName = input.files[0].name
      const indx = input.files[0].name.lastIndexOf(".") + 1
      const extenFile = input.files[0].name.substr(indx, fileName.length).toLowerCase()
      if( extenFile=='jpg' || extenFile=='jpeg' || extenFile=='png' ){
        this.file = input.files[0];
        this.iHandler.handler( this.file )
        .then( res => this.imagePreview = res );
      } else {
        this.toastr.error('El archivo tiene que ser una imagen', 'Tipo de archivo incorrecto')
      }
    }
  }
}
