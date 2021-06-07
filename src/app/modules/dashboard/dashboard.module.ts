import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SalesModule } from './components/sales/sales.module';
import { SalesDayModule } from './components/sales-day/sales-day.module';
import { TicketAverageModule } from './components/ticket-average/ticket-average.module';
import { OrdersModule } from './components/orders/orders.module';
import { PaymentMethodsModule } from './components/payment-methods/payment-methods.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SalesModule,
    SalesDayModule,
    TicketAverageModule,
    OrdersModule,
    PaymentMethodsModule
  ]
})
export class DashboardModule { }
