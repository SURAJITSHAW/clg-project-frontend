import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'list-category', component: ListcategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
