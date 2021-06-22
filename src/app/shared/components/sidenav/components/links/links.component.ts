import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {



  links: LinkInterface[] = [
    {
      link: ['dashboard'],
      img: 'fa fa-chart-line',
      name: 'Dashboard',
    },
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
    {
      link: [],
      img: 'fa fa-tag',
      name: 'Categorías',
      collapse: false,
      children: [
        {
          link: ['categories'],
          img: 'fa fa-tag',
          name: 'Categorías',
        },
        {
          link: ['subcategories'],
          img: 'fa fa-tags',
          name: 'Subcategorías',
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}

interface LinkInterface {
  link: string[],
  img: string,
  name: string,
  children?: LinkInterface[],
  collapse?: boolean
}