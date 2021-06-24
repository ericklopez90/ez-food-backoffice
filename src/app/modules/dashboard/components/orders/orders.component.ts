import { Component, ViewChild } from "@angular/core";
import { Text } from '@modules/dashboard/interface/text.interface';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexGrid
} from "ng-apexcharts";

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  grid: ApexGrid
};
@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent  {

  text: Text [] = [{
    title: 'N° de Ordenes',
    amount: 882,
    contents: -8,
  }]

  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Inflation",
          data: [3.3, 2.1, 1.0, 2.1, 4.0, 3.6, 5.2, 2.3, 4.4, 1.8, 3.5, 2.2]
        }
      ],
      chart: {
        height: 100,
        type: "bar",
        toolbar:{
          show:false
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "Bottom" // top, center, bottom
          }
        }
      },
      grid:{
        show:false
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: "1px",
          colors: ["#fff"]
        }
      },

      xaxis: {
        categories: [
        ],
        position: "bottom",
        labels: {
          show: false,
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        colors: ['#26a0fc']
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
        }
      },
      title: {
        text: "Venta total del dia",
        offsetY: 15,
        align: "center",
        style: {
          color: "#6B6B6B"
        }
      }
          }
    };
  }