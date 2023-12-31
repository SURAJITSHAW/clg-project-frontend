import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent {
  allcat: any = [];

  pimg: any = null;

  constructor(private api: ApiService, private router: Router) {}

  fup(e: any) {
    this.pimg = e.target.files[0];

    console.log(this.pimg.name);
  }

  addp(val: any) {
    var fd = new FormData();
    fd.append('category', val.category);
    fd.append('pname', val.pname);
    fd.append('pprice', val.pprice);
    fd.append('pd', val.pd);
    fd.append('pimg', this.pimg);

    this.api.inspro(fd).subscribe((data: any) => {
      this.router.navigate(['/list-product']);
    });
  }

  getdata() {
    this.api.selcat().subscribe((data: any) => {
      this.allcat = data;
    });
  }

  ngOnInit() {
    this.getdata();
  }
}
