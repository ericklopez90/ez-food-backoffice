import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: 'categories',
        loadChildren: () => import('@modules/category/components/category/category.module')
          .then(m => m.CategoryModule)
      },
      {
        path: 'subcategories',
        loadChildren: () => import('@modules/category/components/subcategory/subcategory.module')
          .then(m => m.SubcategoryModule)
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
