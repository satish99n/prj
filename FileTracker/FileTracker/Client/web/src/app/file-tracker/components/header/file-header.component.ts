import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-header',
  templateUrl: './file-header.component.html',
  styleUrls: ['./file-header.component.scss']
})
export class FileHeaderComponent implements OnInit {

  @Input() file: any;
  constructor() {

  }

  ngOnInit() {    

  }

}

