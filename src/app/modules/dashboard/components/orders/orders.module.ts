import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    MatIconModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule { }
