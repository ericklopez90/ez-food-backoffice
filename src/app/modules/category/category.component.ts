import { Component, OnInit } from '@angular/core';

import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  get categories(){
    return this.categoryServices.category
  }

  constructor(private categoryServices: CategoryService) { }

  ngOnInit(): void {
  }

}

 export interface Category {
  name:string
}