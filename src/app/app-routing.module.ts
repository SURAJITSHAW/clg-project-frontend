import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-cat', component: AddCategoryComponent },
  { path: 'list-cat', component: ListcategoryComponent },
  { path: 'add-product', component: AddproductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
