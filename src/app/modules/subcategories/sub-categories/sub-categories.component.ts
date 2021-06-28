import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { SubCategoryService } from 'shared/services/sub-category.service';
import { CategoryService } from '@services/category.service';


@Component({
  selector: 'subCategories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubcategoriesComponent implements OnInit, OnDestroy, AfterViewInit {

  form = new FormGroup({
    name: new FormControl( '', Validators.required ),
    category: new FormControl( '', Validators.required ),
  });
  subCategories : any[] = [];
  categories: any[]     = []
  subs: Subscription[]  = [];
  categories$!: Observable<any>;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name',  'category', 'status'];
  @ViewChild( MatPaginator ) paginator!: MatPaginator;

  constructor(
    private toastr :ToastrService,
    private subCategory$: SubCategoryService,
    private category$: CategoryService,
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
    if ( this.form.valid ) {
      const name = this.form.get('name')?.value;
      const category = this.form.get('category')?.value;
      const sub = this.subCategory$.save( name, category )
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


}
