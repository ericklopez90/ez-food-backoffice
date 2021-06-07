import { Component, ViewChild } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexTheme,
  ApexDataLabels

} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  stroke: ApexStroke;
  fill: ApexFill;
  grid: ApexGrid;
  legend: ApexLegend;
  theme: ApexTheme;
  datalabels:ApexDataLabels;
};
@Component({
  selector: 'payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent {

  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [30, 27.1, 24.1, 18.8],
      chart: {
        type: "donut",
      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 0.8
      },
      grid:{
        show:false,
      },
      theme: {
        monochrome: {
          enabled: true
        }
      },
      datalabels:{
        enabled:false
      },
      legend:{
        show:false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}