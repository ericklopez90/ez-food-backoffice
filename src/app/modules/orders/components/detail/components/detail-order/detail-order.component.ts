import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit {

  details: DetailOrder [] = [
    {
    product: 'Enchiladas verdes',
    price: 100,
    amount: 2
  },
  {
    product: 'Chilaquiles divorciados',
    price: 125,
    amount: 1
  },
  {
    product: 'Jugo Verde',
    price: 45,
    amount: 2
  },
]

  constructor() { }

  ngOnInit(): void {
  }

  totalList(a:number, b:number):number{
    return a * b
  }

  subtotal():number{
    return this.details.reduce((a:any, b:any)=>{
      return a + ( b.price * b.amount)
    },0) || 0
  }

  iva():number{
    return this.subtotal() * .16
  }

  total():number{
    return this.subtotal() + this.iva() 
  }
}

interface DetailOrder {
  product: string,
  price: number,
  amount: number,
}