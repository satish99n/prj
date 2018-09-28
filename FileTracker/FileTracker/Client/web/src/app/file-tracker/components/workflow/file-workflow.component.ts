import { Component, OnInit, Input, Output, ViewChild, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileStepService } from '../../services/file-step.service';

@Component({
  selector: 'app-file-workflow',
  templateUrl: './file-workflow.component.html',
  styleUrls: ['./file-workflow.component.scss']
})
export class FileWorkflowComponent implements OnInit, OnChanges {

  @Input() file: any;
  @Input() steps: any[] = [];
  @Input() matrix: any[] = [];
  @Input() selectedStepIndex: any;
  @Input() users: any[] = [];
  @Input() statuses: any[] = [];
  @Input() exitCodes: any[] = [];
  @Input() fileTrack: any;

  @Output() change = new EventEmitter<any>();

  @ViewChild('stepper') stepper;

  workflowForm: FormGroup;

  constructor(public fileStepService: FileStepService,
    private fb: FormBuilder) {

  }

  ngOnInit() {

    this.createForm();

  }

  ngOnChanges(changes: SimpleChanges) {

  }

  createForm() {

    this.workflowForm = this.fb.group({
      AssigneeId: '',
      ExitCode: '',
      Notes:''
    });

    this.workflowForm.valueChanges
      .subscribe(formVals => {
        this.change.emit(formVals);
      });

  }

}


