import { Injectable } from '@angular/core';
import { ListProduct } from '@interfaces/productList.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  lista:  ListProduct []=[
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


  constructor() { }
}
