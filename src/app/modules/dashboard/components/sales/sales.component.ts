import {
  Component,
} from "@angular/core";
import {
  ApexChart,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexMarkers,
  ApexAnnotations,
  ApexStroke
} from "ng-apexcharts";
import {
  data
} from "./series-data";

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  annotations: ApexAnnotations;
  colors: any;
  toolbar: any;
};

@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {

  chartOptions: any = {

    series: [{
      name: "Ventas",
      data: data

    }],
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0
    },
    title: {
      text: "Ventas",
      align: "center",
      style: {
        fontSize: '30px',
        fontWeight: 300,
      }
    },
    fill: {
      colors: ['#312E81']


    },
    yaxis: {
      show: false,
      labels: {},
      title: {
        text: "Price"
      }

    },
    xaxis: {
      type: "datetime",

    },
    tooltip: {
      shared: false,
      y: {}
    },
    theme: {
      mode: 'dark',
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ['#221F5D'],
      width: 2,
      dashArray: 0,

    },
    grid: {
      show: true,
      borderColor: '#6C6C6C',
      padding: {
        top: 10,
        bottom: 0,
        left: 0,
        right: 0
      },
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      constructor() {

      }
    }
  }
}
