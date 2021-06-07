import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [SalesComponent]
})
export class SalesModule { }
