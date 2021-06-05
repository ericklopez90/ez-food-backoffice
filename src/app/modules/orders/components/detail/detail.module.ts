import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { DetailOrderComponent } from './components/detail-order/detail-order.component';
import { StatusOrderComponent } from './components/status-order/status-order.component';
import { DetailPayComponent } from './components/detail-pay/detail-pay.component';


@NgModule({
  declarations: [
    DetailComponent,
    DetailOrderComponent,
    StatusOrderComponent,
    DetailPayComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
