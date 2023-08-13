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

  ngOnInit() {
    this.api.selcat().subscribe((data: any) => {
      this.allcat = data;
    });
  }

}
