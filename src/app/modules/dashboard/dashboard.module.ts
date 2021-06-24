import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SalesModule } from './components/sales/sales.module';
import { PaymentMethodsModule } from './components/payment-methods/payment-methods.module';
import { CardsModule } from './components/cards/cards.module';
import { TextComponent } from './components/text/text.component';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SalesDayComponent } from './components/sales-day/sales-day.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TicketAverageComponent } from './components/ticket-average/ticket-average.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TextComponent,
    SalesDayComponent,
    OrdersComponent,
    TicketAverageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SalesModule,
    PaymentMethodsModule,
    CardsModule,
    MatIconModule,
    NgApexchartsModule,
    MatIconModule,
  ],
  exports: [TextComponent]
})
export class DashboardModule { }
