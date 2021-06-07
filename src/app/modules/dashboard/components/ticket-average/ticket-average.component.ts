import {
  Component,
  ViewChild
} from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexYAxis,
  ApexMarkers
} from "ng-apexcharts";

export interface ChartOptions  {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  yaxis: ApexYAxis;
  markers: ApexMarkers;
};


@Component({
  selector: 'ticket-average',
  templateUrl: './ticket-average.component.html',
  styleUrls: ['./ticket-average.component.css']
})
export class TicketAverageComponent {
  public chartOptions: any ;

  constructor() {
    this.chartOptions = {
      series: [{
        name: "Desktops",
        data: [100, 80, 75, 61, 59, 100, 69, 91, 100]
      }],
      chart: {
        height: 100,
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar:{
          show:false
        }
      },
      dataLabels: {
        enabled: false
      },
      markers:{
        size: 3,
        colors: ['#5F9ACC'],
        strokeColors: '#5F9ACC',
        strokeWidth: 0,
        strokeOpacity: 0,
        strokeDashArray: 0,
        fillOpacity: 0,
        discrete: [],
        shape: "circle",
        radius: 0,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
      },
      stroke: {
        curve: "straight"
      },

      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ],
        labels: {
          show: false,
        },
      },
      yaxis:{
        labels:{
          show: false,
        },

      }
    };
  }
}