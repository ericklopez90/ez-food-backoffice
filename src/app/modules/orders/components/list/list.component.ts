import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'mesa', 'mesero', 'total', 'metodoPago', 'status', 'fecha'];
  dataSource = this.lista

  get lista(){
    return this.OrderListServices.lista
  }

  constructor( private _router: Router,
               private OrderListServices:OrderListService) { }

  ngOnInit(): void {
    
  }

  badgeText( status:string ) :string | any {
    if       (status==='Abierta')           {'label-primary'}
    else if  (status==='Cerrada')           {'label'}
    else if  (status==='Pendiente de pago') {'label-danger'}
  }
  
  showDetail() :void{
    this._router.navigateByUrl('/orders/detail');
  }
}

