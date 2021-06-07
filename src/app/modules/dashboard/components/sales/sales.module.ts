import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserModule } from '@angular/platform-browser';
import { SalesComponent } from './sales.component';


@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    BrowserModule
  ],
  exports: [SalesComponent]
})
export class SalesModule { }
