import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoriesComponent } from './subcategories.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SubcategoriesComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('@modules/subcategories/sub-categories/sub-categories.module')
          .then(m => m.SubCategoriesModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('@modules/subcategories/edit-sub-categories/edit-sub-categories.module')
          .then(m => m.EditSubCategoriesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoriesRoutingModule { }
