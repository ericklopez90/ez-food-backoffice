import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail-pay',
  templateUrl: './detail-pay.component.html',
  styleUrls: ['./detail-pay.component.css']
})
export class DetailPayComponent implements OnInit {


  listas: Lista [] = [
    {
      transaction:'F5F5F5',
      methodPayment:'Efectivo',
      amount: 612,
      date: '26 de Mayo de 2021, 21:30'
    },
    {
      transaction:'KFNSF665SDFS1',
      methodPayment:'PayPal',
      amount: 350,
      date: '26 de Mayo de 2021, 21:27'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}

interface Lista {
  transaction:string,
  methodPayment:string,
  amount:number,
  date:string
}