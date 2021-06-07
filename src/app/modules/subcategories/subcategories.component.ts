import { Component, OnInit } from '@angular/core';
import { categorys } from '@modules/category/category.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  categories = categorys

  subcategories: subcategories[]=[
    {
      name:'Huevos',
      categories:'Desayunos',
    },
    {
      name:'Chilaquiles',
      categories:'Desayunos',
    },
    {
      name:'Carnes',
      categories:'Comidas',
    },
    {
      name:'Pescados',
      categories:'Comidas',
    },
    {
      name:'Ligeras',
      categories:'Cenas',
    },
    {
      name:'Con alcohol',
      categories:'Bebidas',
    },
    {
      name:'Sin alcohol',
      categories:'Bebidas',
    },
    {
      name:'Crepas',
      categories:'Postres',
    },
    {
      name:'Pan',
      categories:'Postres',
    },
  ]



  constructor(private toastr :ToastrService) { }

  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.success('Se ha agregado correctamente', 'Hecho!');
  }
}

interface subcategories {
  name: string,
  categories: string,
}