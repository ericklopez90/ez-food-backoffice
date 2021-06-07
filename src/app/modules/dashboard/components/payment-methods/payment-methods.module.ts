import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodsComponent } from './payment-methods.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PaymentMethodsComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    MatIconModule
    
  ],
  exports: [PaymentMethodsComponent]
})
export class PaymentMethodsModule { }
