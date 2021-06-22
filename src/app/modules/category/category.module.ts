import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewCategoriesComponent } from './new-categories/new-categories.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CategoriesComponent,
    NewCategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
   
  ]
})
export class CategoryModule { }
