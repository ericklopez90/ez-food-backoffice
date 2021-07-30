import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from '@services/category.service';
import { Categories } from '@interfaces/categories.interface';
import { ActivatedRoute } from '@angular/router';
import { SubCategoryService } from '@services/sub-category.service';
import { Subcategories } from '@interfaces/subcategories.interface';
import { debounce } from "typescript-debounce-decorator";
import { IngredientsService } from '@services/ingredients.service';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dialog } from './components/dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ImageHandlerService } from '@services/image-handler.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit, OnDestroy {
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
  options!: string[];
  subs: Subscription[] = []
  ingredient!: string;
  newIngredients!: string;
  imagePreview = '';

  formNewProduct: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', Validators.required],
    categories: ['', Validators.required],
    subcategories: ['', Validators.required],
    file: ['', Validators.required]
  })
 
  constructor( private fb           : FormBuilder,
               private _route       : ActivatedRoute,
               private category$    : CategoryService,
               private subCategory$ : SubCategoryService,
               private ingredient$  : IngredientsService,
               private dialog       : MatDialog,
               private toastr       : ToastrService,
               private iHandler     : ImageHandlerService
               ){ }

  ngOnInit(){
    this._route.params.subscribe(
      ( data: any ) => console.log(data) )
    this.getCategories();
    this.getOneIngredient()
  }

  ngOnDestroy():void{
    this.subs.map(s => s.unsubscribe())
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

  getSubcategory():void {
    const category = this.formNewProduct.get("categories")?.value;
    const s = this.subCategory$.fetchOne(category)
    .subscribe(resp => this.subcategories = resp.payload)
    this.subs.push(s)
  }

  getIva():number{
    return this.iva = this.formNewProduct.get('price')?.value * .16;
  }

  @debounce(750)
  getOneIngredient():void {
    const params = this.formNewProduct.get("ingredients")?.value; 
    if( params.length > 2 )
    {
    const s = this.ingredient$.getOneIngredient( params )
    .subscribe(({payload}) => 
    this.options = payload.map((p:any) => p.name))
    this.subs.push(s)
    }
  }

  addIngredient():void{
    const ingredient = this.formNewProduct.get("ingredients")?.value; 
    this.mandatory.push(ingredient)
  }

  newIngredient():void{
    const ingredient = this.newIngredients
    const s = this.ingredient$.putOneIngredient(ingredient)
    .subscribe(resp => {
      console.log(resp)
    },
    ( { error }: HttpErrorResponse ) => this.toastr.error( error.response.message, error.response.title )
    )

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '100%',
      height: '100%',
      data: {ingredient: this.newIngredients}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newIngredients = result;
    });
  }

  uploadFile(file: any ):void{
    const input = file as HTMLInputElement;
    if( input && input.files ) {
      const fileName = input.files[0].name
      const indx = input.files[0].name.lastIndexOf(".") + 1
      const extenFile = input.files[0].name.substr(indx, fileName.length).toLowerCase()
      if( extenFile=='jpg' || extenFile=='jpeg' || extenFile=='png' ){
        this.file = input.files[0];
        this.iHandler.handler( this.file )
        .then( res => this.imagePreview = res );
      } else {
        this.toastr.error('El archivo tiene que ser una imagen', 'Tipo de archivo incorrecto')
      }
    }
  }

  validImage(){
    if(!this.file){
      this.toastr.error('Es necesaria una imagen' , 'Formulario incompleto')
    }
  }

}

