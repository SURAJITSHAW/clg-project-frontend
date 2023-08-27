import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrls: ['./editcat.component.css'],
})
export class EditcatComponent {
  id: any = '';
  cats: any = {};

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}


  editcatdata(val: any) {
    var fd = new FormData();
    fd.append('cname', val.name);
    fd.append('id', this.id);

    this.api.updatecat(fd).subscribe((data: any) => {
      this.router.navigate(['/list-cat']);
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    var fd = new FormData();
    fd.append('id', this.id);

    this.api.geteditcat(fd).subscribe((data: any) => {
      this.cats = data;
    });
  }
}
