import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditcatComponent } from './editcat/editcat.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { ListproductsComponent } from './listproducts/listproducts.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-cat', component: AddCategoryComponent },
  { path: 'list-cat', component: ListcategoryComponent },
  { path: 'edit-cat/:id', component: EditcatComponent },
  { path: 'add-product', component: AddproductComponent },
  { path: 'list-product', component: ListproductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
