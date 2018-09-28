import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FileStepService } from '../../services';

@Component({
  selector: 'app-notes',
  templateUrl: './file-note.component.html',
  styleUrls: ['./file-note.component.scss']
})
export class FileNoteComponent implements OnInit {

  displayedColumns: string[] = ['stepName', 'note', 'user'];  
  @Input() notes:any = [];
  dataSource = new MatTableDataSource();
  

  constructor(public fileStepService: FileStepService) {
    
  }

  ngOnInit() {
  }


}

