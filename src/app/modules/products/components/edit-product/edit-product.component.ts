import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  mandatory = [
    'Base pan de chocolate',
    'Chocolate',
  ];

  optional = [
    'Azúcar glass',
    'Jarábe de chocolate'
  ];
//
//  formEditProdct: FormGroup = this.fb.group({
//    name: ['', Validators.required],
//    description: ['', Validators.required],
//    ingredients: ['', Validators.required],
//    price: ['', Validators.required],
//    categories: ['', Validators.required],
//    subcategories: ['', Validators.required],
//    file: ['', Validators.required]
//  })
// 
  constructor( ){ }

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
}




