import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-integration',
  templateUrl: './file-integration.component.html',
  styleUrls: ['./file-integration.component.scss']
})
export class FileIntegrationComponent implements OnInit {

  @Input() file: any;
  constructor() {

  }

  ngOnInit() {


  }

}

