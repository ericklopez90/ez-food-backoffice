import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = categorys

  constructor() { }

  ngOnInit(): void {
  }
}

 interface Category {
  name:string
}

export const categorys: Category[]=[
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