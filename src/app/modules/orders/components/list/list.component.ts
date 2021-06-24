import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lista:  List []=[
    {
      id: 'SDF456',
      mesa: '14',
      mesero: 'Alberto EfeCinco',
      total: 700,
      metodoPago: 'Efectivo',
      status:'Cerrada',
      fecha: '2020-05-02 03:02:50',
    },
    {
      id: '98S7DF',
      mesa: '1',
      mesero: 'Suaverto López',
      total: 324,
      metodoPago: 'TDC',
      status:'Pendiente de pago',
      fecha: '2020-05-02 10:59:50',
    },
    {
      id: 'C78V6B',
      mesa: '2',
      mesero: 'El batelenguas Sánchez',
      total: 567,
      metodoPago: 'Paypal',
      status:'Abierta',
      fecha: '2020-05-02 12:19:50',
    },
    {
      id: '83ASD',
      mesa: '10',
      mesero: 'El batelenguas Sánchez',
      total: 123,
      metodoPago: 'Paypal',
      status:'Pendiente de pago',
      fecha: '2020-05-02 13:42:55',
    },
    {
      id: '897DGF',
      mesa: '1',
      mesero: 'Suaverto López',
      total: 534,
      metodoPago: 'TDC',
      status:'Abierta',
      fecha: '2020-05-02 14:52:50',
    },
    {
      id: 'WER548',
      mesa: '4',
      mesero: 'Suaverto López',
      total: 456,
      metodoPago: 'Efectivo',
      status:'Cerrada',
      fecha: '2020-05-02 19:42:20',
    },
    {
      id: 'G897JG',
      mesa: '5',
      mesero: 'Alberto EfeCinco',
      total: 789,
      metodoPago: 'TDC',
      status:'Pendiente de pago',
      fecha: '2020-05-02 10:52:50',
    },
    {
      id: '0978QE',
      mesa: '6',
      mesero: 'Alberto EfeCinco',
      total: 123,
      metodoPago: 'Efectivo',
      status:'Cerrada',
      fecha: '2020-05-02 07:22:50',
    },
    {
      id: '432HJK',
      mesa: '8',
      mesero: 'El batelenguas Sánchez',
      total: 783,
      metodoPago: 'Paypal',
      status:'Cerrada',
      fecha: '2020-05-02 06:38:50',
    },
    {
      id: '908ASD',
      mesa: '5',
      mesero: 'Alberto EfeCinco',
      total: 1534,
      metodoPago: 'TDC',
      status:'Cerrada',
      fecha: '2020-05-02 20:32:31',
    },
    {
      id: '908ASD',
      mesa: '5',
      mesero: 'Alberto EfeCinco',
      total: 1534,
      metodoPago: 'TDC',
      status:'Cerrada',
      fecha: '2020-05-02 20:32:31',
    },
    {
      id: '908ASD',
      mesa: '5',
      mesero: 'Alberto EfeCinco',
      total: 1534,
      metodoPago: 'TDC',
      status:'Cerrada',
      fecha: '2020-05-02 20:32:31',
    },
    {
      id: '908ASD',
      mesa: '5',
      mesero: 'Alberto EfeCinco',
      total: 1534,
      metodoPago: 'TDC',
      status:'Cerrada',
      fecha: '2020-05-02 20:32:31',
    },
    {
      id: '908ASD',
      mesa: '5',
      mesero: 'Alberto EfeCinco',
      total: 1534,
      metodoPago: 'TDC',
      status:'Cerrada',
      fecha: '2020-05-02 20:32:31',
    },
    {
      id: '908ASD',
      mesa: '5',
      mesero: 'Alberto EfeCinco',
      total: 1534,
      metodoPago: 'TDC',
      status:'Cerrada',
      fecha: '2020-05-02 20:32:31',
    },
  ]

  constructor( private _router: Router ) { }

  ngOnInit(): void {
  }

  showDetail() :void{
    this._router.navigateByUrl('orders/detail');
  }
}

export interface List{
  id : string;
  mesa : string;
  mesero : string;
  total: number;
  metodoPago: string;
  status: string;
  fecha: string;
}
