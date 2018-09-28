import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileMatrixService {
  url: string = '/api/filestatusmatrix';
  //url: string = 'http://localhost/api/filestatusmatrix';
  constructor(private http: HttpClient) { }

  getMatrix(id: number) : any {

    return this.http.get(this.url + "?id=" + id);
  }

  getExitCodes(id: number, statusId: number, workflowId: number) : any {

    return this.http.get(this.url + "/getexitcodes?fileId=" + id + "&statusId=" + statusId + "&workflowId=" + workflowId);
  }  

}
