import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

interface Mesero {
  name: string
}

interface Data {
  tableNumber: number,
  status: string,
  orderNumber: string,
  waiter: Mesero[],
  availability: Boolean,
  qr: string,

}