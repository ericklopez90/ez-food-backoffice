import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketAverageComponent } from './ticket-average.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TicketAverageComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    MatIconModule
  ],
  exports: [TicketAverageComponent]
})
export class TicketAverageModule { }
