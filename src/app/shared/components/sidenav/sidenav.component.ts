import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @Output() optionSelected = new EventEmitter<void>();
  menu: RouteOption[] = [
    {
      name: 'Dashboard',
      route: '/dashboard'
    },
    {
      name: 'Ordenes',
      route: '/orders'
    },
    {
      name: 'Platillos',
      route: '/meals'
    },
    {
      name: 'Mesas',
      route: '/tables'
    },
    {
      name: 'Cocina',
      route: '/kitchen'
    },
    {
      name: 'Usuarios',
      route: '/users'
    },
    {
      name: 'Categorías',
      route: '',
      children: [
        {
          name: 'Categorías',
          route: 'categories'
        },
        {
          name: 'Sub categorías',
          route: 'sub-categories'
        }
      ]
    },
  ]

  constructor(
    private router: Router,
  ) { }

  navigate( route: string ): void {
    this.router.navigateByUrl( route );
    this.optionSelected.emit();
  }

  logout( route:string ):void{
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigateByUrl( route );    
  }
}

interface RouteOption {
  name: string;
  route: string;
  children?: RouteOption[];
}
