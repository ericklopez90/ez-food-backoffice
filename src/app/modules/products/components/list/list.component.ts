import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'categoria', 'subcategoria', 'price'];
  dataSource = this.lista

  get lista(){
    return this.ProductListService.lista
  }

  constructor( private _router: Router,
               private ProductListService:ProductListService
               ) { }

  ngOnInit(): void {
  }

  showNewProduct():void{
  this._router.navigateByUrl('meals/new-product');
  }
  showEditProduct():void{
  this._router.navigateByUrl('meals/edit-product');
  }

}
