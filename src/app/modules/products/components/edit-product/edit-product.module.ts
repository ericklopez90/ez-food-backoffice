import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductRoutingModule } from './edit-product-routing.module';
import { EditProductComponent } from './edit-product.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EditProductComponent
  ],
  imports: [
    CommonModule,
    EditProductRoutingModule,
    RouterModule
  ]
})
export class EditProductModule { }
