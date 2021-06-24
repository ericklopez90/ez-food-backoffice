import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'status-order',
  templateUrl: './status-order.component.html',
  styleUrls: ['./status-order.component.css']
})
export class StatusOrderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  fecha(){
    let fecha = new Date()
    return fecha
  }

}
