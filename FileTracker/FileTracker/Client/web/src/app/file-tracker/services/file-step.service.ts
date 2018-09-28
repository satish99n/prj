import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileStepService {

  url: string = '/api/step';
  //url: string = 'http://localhost/api/step';
  constructor(private http: HttpClient) { }

  getAllFileSteps(id: number, trackId: number) : any {

    return this.http.get(this.url + "?id=" + id + "&trackId=" + trackId);
  }

}
