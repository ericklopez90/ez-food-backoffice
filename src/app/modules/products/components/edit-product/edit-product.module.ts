import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductRoutingModule } from './edit-product-routing.module';
import { EditProductComponent } from './edit-product.component';
import { RouterModule } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    EditProductComponent
  ],
  imports: [
    CommonModule,
    EditProductRoutingModule,
    RouterModule,
    DragDropModule
  ]
})
export class EditProductModule { }
