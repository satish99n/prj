import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StatusService {
  url: string = '/api/status';
  //url: string = 'http://localhost/api/status';
  constructor(private http: HttpClient) { }

  getAll() : any {

    return this.http.get(this.url);
  }

}
