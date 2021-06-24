import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Cards []= [
    {
      number: 6,
      title: 'Abiertas',
      textColor: 'text-success'
    },
    {
      number: 7,
      title: 'Cerradas',
      textColor: 'text-info'
    },
    {
      number: 8,
      title: 'Pendientes de Pago',
      textColor: 'text-warning'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface Cards{
  number: number,
  title: string,
  textColor: string,
}