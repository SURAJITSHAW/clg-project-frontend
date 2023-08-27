import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css'],
})
export class ListproductsComponent {
  allpro: any = [];

  constructor(private api: ApiService) {}

  getdata() {
    this.api.selpro().subscribe((data: any) => {
      this.allpro = data;
    });
  }

  ngOnInit() {
    this.getdata();
  }

  delp(id: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      var fd = new FormData();
      fd.append('id', id);

      this.api.delpro(fd).subscribe((data: any) => {
        this.getdata();
      });
    }
  }
}
