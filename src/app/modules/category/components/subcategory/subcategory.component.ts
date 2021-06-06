import { Component, OnInit } from '@angular/core';
import { categorys } from '../category/category.component'
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  categories = categorys
  constructor() { }

  ngOnInit(): void {
  }

}
