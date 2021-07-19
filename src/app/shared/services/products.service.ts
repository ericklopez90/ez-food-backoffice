import { Injectable } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

products: Product[] = [
  {
  id: 1,
  name: '',
  image: '',
  price: 0,
  description: '',
  ingredients: [],
  category: '',
  subcategories:'',
},
]

  constructor() { }
}
