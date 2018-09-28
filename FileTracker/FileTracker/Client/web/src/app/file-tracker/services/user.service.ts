import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  url: string = '/api/user';
  //url: string = 'http://localhost/api/user';
  constructor(private http: HttpClient) { }

  getAll() : any {

    return this.http.get(this.url);
  }

}
