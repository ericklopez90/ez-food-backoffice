import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoriesComponent } from './sub-categories.component';

const routes: Routes = [
  {
    path: '',
    component: SubcategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoriesRoutingModule { }
