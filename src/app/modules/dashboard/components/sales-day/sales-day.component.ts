import { Component, ViewChild  } from '@angular/core';
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
  selector: 'sales-day',
  templateUrl: './sales-day.component.html',
  styleUrls: ['./sales-day.component.css']
})
export class SalesDayComponent {
  
public chartOptions:any ;

constructor() {
  this.chartOptions = {
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 5.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
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
          position: "BOTO" // top, center, bottom
        }
      }
    },
    grid:{
      show:false
    },
    dataLabels: {

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
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
          }
        }
      },
      tooltip: {
        enabled: true,
        offsetY: -35
      }
    },
    fill: {
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show:false
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