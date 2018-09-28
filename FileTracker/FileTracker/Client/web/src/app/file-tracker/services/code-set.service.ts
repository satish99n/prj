import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CodeSetService {

  url: string = '/api/codeset';
  //url: string = 'http://localhost/api/codeset';
  constructor(private http: HttpClient) { }

  getAll() : any {

    return this.http.get(this.url);
  }

}
