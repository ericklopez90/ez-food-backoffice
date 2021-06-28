import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCategoriesRoutingModule } from './edit-categories-routing.module';
import { EditCategoriesComponent } from './edit-categories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    EditCategoriesComponent
  ],
  imports: [
    CommonModule,
    EditCategoriesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class EditCategoriesModule { }