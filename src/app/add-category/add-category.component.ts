import { Component } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  cat:any = "My Category";

  addCat(val: any) {
    this.cat = val.name;
    
  }

}
