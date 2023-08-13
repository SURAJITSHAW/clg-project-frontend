import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    inscat(fd: any){
      return this.http.post("http://localhost:2000/cat/add", fd);
    }

    selcat(){
      return this.http.get('http://localhost:2000/cat/sel');
    }

}
