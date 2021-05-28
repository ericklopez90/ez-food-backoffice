import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path:'',
    component: ProductsComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('@modules/products/components/list/list.module')
          .then(m => m.ListModule)
      },
      {
        path: 'new-product',
        loadChildren: () => import('modules/products/components/new-product/new-product.module')
          .then(m => m.NewProductModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
