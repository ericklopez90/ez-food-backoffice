import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links: _Links[] = [
    {
      link: ['orders'],
      img: 'fa fa-book',
      name: 'Ordenes',
    },
    {
      link: ['products'],
      img: 'fa fa-cubes',
      name: 'Productos',
    },
    {
      link: ['tables'],
      img: 'fa fa-cutlery',
      name: 'Mesas',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}

interface _Links {
  link: string[],
  img: string,
  name: string,
}