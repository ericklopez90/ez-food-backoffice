import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CategoryService } from '@services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy, AfterViewInit {

  form = new FormGroup({
    control: new FormControl( '', Validators.required )
  });
  categories : any[] = [];
  subs: Subscription[] = [];
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name', 'status'];
  @ViewChild( MatPaginator ) paginator!: MatPaginator;

  constructor(
    private toastr :ToastrService,
    private category$: CategoryService
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
    if ( this.form.valid ) {
      const name = this.form.get('control')?.value;
      const sub = this.category$.save( name )
      .subscribe(
       _ => {
          this.toastr.success(`${ name } se agregó correctamente`, 'Hecho!');
          this.getCategories();
          this.form.reset();
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


}
