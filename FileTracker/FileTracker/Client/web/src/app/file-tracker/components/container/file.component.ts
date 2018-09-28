import {Component, Inject, ViewChild, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FileService} from '../../services/file.service';
import { FileStepService, FileTrackerService, FileMatrixService, UserService, StatusService } from '../../services';
import { CodeSetService } from '../../services/code-set.service';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit  {
  file: any = null;
  steps: any = null;
  matrix: any = null;
  statuses: any = null;
  assignees: any = null;
  exitCodes: any = null;
  codeSets: any = null;
  notes: any = null;
  selectedStepIndex: number;;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<FileComponent>,
    public fileTrackService: FileTrackerService,
    public fileStepService: FileStepService,
    public fileMatrixService: FileMatrixService,
    public userService: UserService,
    public statusService: StatusService,
    public codeSetService: CodeSetService,
    @Inject(MAT_DIALOG_DATA) public fileTrack: any) 
    {      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.fileTrackService.getFile(this.fileTrack['FileTrackId']).subscribe(response => { 
      this.file = response 

      this.init();
    });

    this.fileStepService.getAllFileSteps(this.fileTrack['FileId'], this.fileTrack['FileTrackId']).subscribe(response => {
      this.steps = response;
      this.notes = response;

      this.init();
    });

    this.fileMatrixService.getMatrix(this.fileTrack['FileId']).subscribe(redPill => {
      this.matrix = redPill;
    });

    this.fileMatrixService.getExitCodes(this.fileTrack['FileId'], this.fileTrack['StatusId'], this.fileTrack['WorkflowId']).subscribe(response => {
      this.exitCodes = response;
    });    

    this.userService.getAll().subscribe(response => {
      this.assignees = response;
    });

    this.statusService.getAll().subscribe(response => {
      this.statuses = response;
    });

    this.codeSetService.getAll().subscribe(response => {
      this.codeSets = response;
    });
  }

  init() {

    this.setSelectedStep();

  }

  setSelectedStep() {

    if(this.file !== null && this.steps && this.steps.length) {

      for(var i = 0; i < this.steps.length; i++) {

        var step = this.steps[i];
        step.complete = true;
  
        if(step.StatusId === this.file.StatusId) {     
          step.selected = true;     
          this.selectedStepIndex = i;
          break;
        }
  
      }

    }


  }

  onChange(event) {

    this.file = Object.assign(this.file, event);

  }

  onOkClick(): void {
    
    this.fileTrackService.update(this.file).subscribe(response => {
      this.dialogRef.close();
    });

  } 

}