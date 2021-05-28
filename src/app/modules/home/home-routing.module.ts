import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  HomeComponent
} from './home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'orders',
      loadChildren: () => import('@modules/orders/orders.module')
        .then(m => m.OrdersModule)
    },
    {
      path: 'tables',
      loadChildren: () => import('@modules/tables/tables.module')
        .then(m => m.TablesModule)
    },
    {
      path: 'products',
      loadChildren: () => import('@modules/products/products.module')
        .then(m => m.ProductsModule)
    },


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
