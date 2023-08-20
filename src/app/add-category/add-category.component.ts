import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private api: ApiService) {}

  cat:any = "My Category";

  addCat(val: any) {

    this.cat = val.name;

    var fd = new FormData();
    fd.append('cname', val.name);

    this.api.inscat(fd).subscribe((data: any) => {
      console.log(data);
    });
    
  }

}
