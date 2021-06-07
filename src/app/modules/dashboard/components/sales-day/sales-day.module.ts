import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesDayComponent } from './sales-day.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SalesDayComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    MatIconModule

  ],
  exports:[SalesDayComponent]
})
export class SalesDayModule { }
