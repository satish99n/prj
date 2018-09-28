import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter, createPlatformFactory } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-detail',
  templateUrl: './file-detail.component.html',
  styleUrls: ['./file-detail.component.scss']
})
export class FileDetailComponent implements OnInit, OnChanges {

  @Input() file: any;
  @Input() codeSets: any[] = [];
  @Output() change = new EventEmitter<any>(); 
  detailForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(){

    this.createForm();

  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.file && changes.file.firstChange !== true) {

      this.detailForm.patchValue(this.file);

    }
  }

  createForm() {

    this.detailForm = this.fb.group({
      Priority: '',
      BusinessPriority: '',
      FileName: '',
      FilePath: '',
      SalesforceId: ''
    });

    this.detailForm.valueChanges
    .subscribe(formVals => {
      this.change.emit(formVals);      
    });

  }

}

