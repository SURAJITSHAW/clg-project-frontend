import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { ListcategoryComponent } from './listcategory/listcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCategoryComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    ListcategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
