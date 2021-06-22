import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../category.component';


@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  @Input() categories: Category [] = []

  constructor() { }

  ngOnInit(): void {
  }

}
