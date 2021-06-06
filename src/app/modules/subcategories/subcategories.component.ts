import { Component, OnInit } from '@angular/core';
import { categorys } from '@modules/category/category.component';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  categories = categorys

  constructor() { }

  ngOnInit(): void {
  }

}
