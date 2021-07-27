import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductListService } from './product-list.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'categoria', 'subcategoria', 'price'];
  dataSource = new MatTableDataSource<any>([])
  @ViewChild( MatPaginator ) paginator!: MatPaginator;

  get lista(){
    return this.ProductListService.lista
  }

  constructor( private _router: Router,
               private ProductListService:ProductListService
               ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    if ( this.dataSource ) {
      this.paginator._intl.firstPageLabel = 'Primera página';
      this.paginator._intl.itemsPerPageLabel = 'Categorías por página';
      this.paginator._intl.lastPageLabel = 'Última página';
      this.paginator._intl.nextPageLabel = 'Siguiente página';
      this.paginator._intl.previousPageLabel = 'Página anterior';
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = this.lista
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showNewProduct():void{
  this._router.navigateByUrl('meals/new-product');
  }
  showEditProduct():void{
  this._router.navigateByUrl('meals/edit-product');
  }

}
