import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileTrackerService {

  url: string = '/api/filetrack';
  //url: string = 'http://localhost/api/filetrack';
  constructor(private http: HttpClient) { }

  getAllFiles() : any {
    return this.http.get(this.url);
  }

  getFile(id: number) : any{

    return this.http.get(this.url + "?id=" + id);

  }

  update(fileTrack) : any {
    return this.http.post(this.url + "/update", fileTrack );
  }

}
