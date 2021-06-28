import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('@modules/category/categories/categories.module')
          .then(m => m.CategoriesModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('@modules/category/edit-categories/edit-categories.module')
          .then(m => m.EditCategoriesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
