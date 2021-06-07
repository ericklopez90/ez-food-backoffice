import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  categories : Category[] = categorys

  constructor( private toastr :ToastrService) { }

  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.success('Se ha agregado correctamente', 'Hecho!');
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