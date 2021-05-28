import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path:'',
    component: OrdersComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('@modules/orders/components/list/list.module')
          .then(m => m.ListModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('modules/orders/components/detail/detail.module')
          .then(m => m.DetailModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
