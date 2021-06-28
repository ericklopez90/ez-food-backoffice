import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProductComponent } from './new-product.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    NewProductComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    CommonModule,
    NewProductRoutingModule,
    DragDropModule
  ]
})
export class NewProductModule { }
