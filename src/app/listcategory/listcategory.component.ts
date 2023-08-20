import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css'],
})
export class ListcategoryComponent {

  allcat:any = [];

  constructor(private api: ApiService) {}

  getdata(){
    this.api.selcat().subscribe((data: any) => {
      this.allcat = data;
    });
  }

  ngOnInit() {
    this.getdata();
  }

  del(did: any) { // did -> is the primary key of that particular item

    if(window.confirm("Are you sure you want to delete?")) {
      var fd = new FormData();
      fd.append('id', did);

      this.api.delcat(fd).subscribe((data: any) => {
        console.log(data);
        this.getdata();
      });
    }
  }

}
