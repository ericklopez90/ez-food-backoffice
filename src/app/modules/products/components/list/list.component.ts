import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lista:  List []=[
    {
      id: 'A8S97D',
      name: 'Chilaquiles Divorciados',
      categoria: 'Desayunos',
      subcategoria: 'Chilaquiles',
      price: 120,
    },
    {
      id: 'Q2U3H4',
      name: 'Brownie de chocolate',
      categoria: 'Postres',
      subcategoria: 'Chocolate',
      price: 159,
    },
    {
      id: 'JKO4L5',
      name: 'Huevos con tocino',
      categoria: 'Desayunos',
      subcategoria: 'Huevos',
      price: 79,
    },
    {
      id: 'OKP243',
      name: 'Huevos potosinos',
      categoria: 'Desayunos',
      subcategoria: 'Huevos',
      price: 88,
    },
    {
      id: 'KJH654',
      name: 'Enchiladas Suizas',
      categoria: 'Comidas',
      subcategoria: 'Enchiladas',
      price: 160,
    },
    {
      id: 'LKÑ354',
      name: 'Pan de la casa',
      categoria: 'Postres',
      subcategoria: 'Pan de dulce',
      price: 20,
    },
    {
      id: '9IASDA',
      name: 'Pastel de carne',
      categoria: 'Comida',
      subcategoria: 'Especiales de la casa',
      price: 179,
    },
    {
      id: 'J3LK45',
      name: 'Huarache de milanesa',
      categoria: 'Comidas',
      subcategoria: 'Huaraches',
      price: 189,
    },
    {
      id: 'JLK243',
      name: 'Huarache de Chamorro',
      categoria: 'Comidas',
      subcategoria: 'Huaraches',
      price: 209,
    },
    {
      id: 'MKO312',
      name: 'Espagueti a la boloñesa',
      categoria: 'Comida',
      subcategoria: 'Sopas',
      price: 79,
    },
    {
      id: 'JIO243',
      name: 'Coctel de frutas',
      categoria: 'Desayunos',
      subcategoria: 'Fruta',
      price: 59,
    },
  ]


  constructor( private _router: Router) { }

  ngOnInit(): void {
  }

  showNewProduct():void{
  this._router.navigateByUrl('products/new-product');
  }
  showEditProduct():void{
  this._router.navigateByUrl('products/edit-product');
  }

}
export interface List{
  id : string;
  name: string;
  categoria: string;
  subcategoria: string;
  price: number;
}