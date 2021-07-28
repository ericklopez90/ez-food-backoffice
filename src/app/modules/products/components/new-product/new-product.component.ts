import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@services/category.service';
import { Categories } from '@interfaces/categories.interface';
import { ActivatedRoute } from '@angular/router';
import { SubCategoryService } from '@services/sub-category.service';
import { Subcategories } from '@interfaces/subcategories.interface';
import { debounce } from "typescript-debounce-decorator";
import { IngredientsService } from '@services/ingredients.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  mandatory = [
    'Base pan de chocolate',
    'Chocolate',
  ];

  optional = [
    'Azúcar glass',
    'Jarábe de chocolate'
  ];

  categories : Categories[] = []
  subcategories: Subcategories [] = []
  file!: File;
  iva!: number;

  


  formNewProduct: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', Validators.required],
    categories: ['', Validators.required],
    subcategories: ['', Validators.required],
    file: ['', Validators.required]
  })
 
  constructor( private fb:FormBuilder,
               private _route:ActivatedRoute,
               private category$:CategoryService,
               private subCategory$:SubCategoryService,
               private ingredient$:IngredientsService ){ }

    ngOnInit(){
      this._route.params.subscribe(
        ( data: any ) => console.log(data) )
      this.getCategories()
    }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  getCategories(){
    this.category$.fetch()
    .subscribe(resp => {
      this.categories = resp.payload
    })
  }

  uploadFile(file: any ):void{
    const input = file as HTMLInputElement;
    if( input && input.files ) {
      this.file = input.files[0];
    }
  }

  getSubcategory():void {
    const category = this.formNewProduct.get("categories")?.value;
    this.subCategory$.fetchOne(category)
    .subscribe(resp => this.subcategories = resp.payload)
  }

  getIva(){
    this.iva = this.formNewProduct.get('price')?.value * .16;
  }

  @debounce(750)
  getIngredient(){
    const params = this.formNewProduct.get("ingredients")?.value; 
    this.ingredient$.getIngredient( params );
  }

  addIngredient(){
    const ingredient = this.formNewProduct.get("ingredients")?.value; 
    this.mandatory.push(ingredient)
  }

}
