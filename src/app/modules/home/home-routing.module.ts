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

const routes: Routes = [
  {
    path:'',
    redirectTo: 'orders',
    pathMatch: 'full'
  },
  {
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
    {
      path: 'categories',
      loadChildren: () => import('@modules/category/category.module')
        .then(m => m.CategoryModule)
    },
    {
      path: 'subcategories',
      loadChildren: () => import('@modules/subcategories/subcategories.module')
        .then(m => m.SubcategoriesModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('@modules/dashboard/dashboard.module')
        .then(m => m.DashboardModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
