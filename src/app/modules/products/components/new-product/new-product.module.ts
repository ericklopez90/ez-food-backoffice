import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProductComponent } from './new-product.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';


@NgModule({
  declarations: [
    NewProductComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    CommonModule,
    NewProductRoutingModule
  ]
})
export class NewProductModule { }
