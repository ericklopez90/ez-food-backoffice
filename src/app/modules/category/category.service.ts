import { Injectable } from '@angular/core';
import { Category } from '@modules/category/category.component'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _categorys: Category[]=[
    {
      name: 'Desayunos'
    },
    {
      name: 'Comidas'
    },
    {
      name: 'Cenas'
    },
    {
      name: 'Bebidas'
    },
    {
      name: 'Postres'
    },
  ]

  get category(){
    return [...this._categorys]
  }

  constructor() { }


}
