import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCategoriesComponent } from '@modules/category/edit-categories/edit-categories.component';

const routes: Routes = [
  {
    path: '',
    component: EditCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSubCategoriesRoutingModule { }
