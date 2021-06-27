import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoriesComponent } from './subcategories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubcategoriesRoutingModule } from './subcategories-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    SubcategoriesComponent
  ],
  imports: [
    CommonModule,
    SubcategoriesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class SubcategoriesModule { }
