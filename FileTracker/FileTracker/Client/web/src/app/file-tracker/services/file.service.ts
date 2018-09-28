import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileService {

  url: string = '/api/file';
  //url: string = 'http://localhost/api/file';
  constructor(private http: HttpClient) { }

  getFile(id: number) : any {

    return this.http.get(this.url + "?id=" + id);
  }

}
