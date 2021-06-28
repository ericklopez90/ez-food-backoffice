import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSubCategoriesRoutingModule } from './edit-sub-categories-routing.module';
import { EditSubCategoriesComponent } from './edit-sub-categories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    EditSubCategoriesComponent
  ],
  imports: [
    CommonModule,
    EditSubCategoriesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class EditSubCategoriesModule { }
