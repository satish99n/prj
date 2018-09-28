import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, 
  HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { catchError, last, map, tap } from 'rxjs/operators';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'file-masking',
  templateUrl: './file-masking.component.html',
  styleUrls: ['./file-masking.component.scss']
})
export class FileMaskingComponent implements OnInit {

  public title: string = 'File Masking';
  public subTitle: string = 'File Masking';
  public files: any[] = [];
  public disabled = false;
  public layouts = ['CCD', 'HL7', 'Flat File']

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  selectEvent() { }

  uploadEvent() { }

  cancelEvent() { }

  onFileComplete(data: any) {
    this.files.push(data);
  }

  cancelFile(file: any) {
    const index = this.files.indexOf(file);
    if (index > -1) {
          this.files.splice(index, 1);
    }
  }

  checkAll() {
    this.files.forEach(file => { file.selected = true; });
  }

  selectAll(event) {
    this.files.forEach(file => { file.layout = event.value; });
  }

  private uploadFiles() {

    this.files.forEach(file => {
        if(file.finished !== true && file.selected === true)
          this.uploadFile(file);
    });
}

  private uploadFile(file: any) {

    file.inProgress = true;

    const fd = new FormData();
    fd.append('file', file.data);

    const req = new HttpRequest('POST', 'http://localhost:4200', fd, {
          reportProgress: true
    });

    file.inProgress = true;
    file.sub = this._http.request(req).pipe(
          map(event => {
                switch (event.type) {
                      case HttpEventType.UploadProgress:
                            file.progress = Math.round(event.loaded * 100 / event.total);
                            break;
                      case HttpEventType.Response:
                            return event;
                }
          }),
          tap(message => { }),
          last(),
          catchError((error: HttpErrorResponse) => {   
            
            setTimeout(function(){
              file.inProgress = false;
              file.finished = true;
              file.canRetry = true;
            }, 2000)
            
            return of(`${file.data.name} upload failed.`);
          })
    ).subscribe(
          (event: any) => {
                if (typeof (event) === 'object') {
                }
          }
    );
  }
}
