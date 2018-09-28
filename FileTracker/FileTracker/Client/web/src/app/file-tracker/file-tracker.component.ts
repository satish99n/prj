import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FileComponent } from './components/container/file.component';
import { FileTrackerService } from './services/file-tracker.service';
import { GridOptions } from '../../../node_modules/ag-grid';
import { AgGridNg2 } from '../../../node_modules/ag-grid-angular';

@Component({
  selector: 'app-home',
  templateUrl: './file-tracker.component.html',
  styleUrls: ['./file-tracker.component.scss']
})
export class FileTrackerComponent implements OnInit {
  
  allColumns = [
    { headerName: 'Priority', field: 'Priority', width:100, filter: "agNumberColumnFilter" },
    { headerName: 'Campaign Id', field: 'CampaignId',width:125, filter: "agNumberColumnFilter" },
    { headerName: 'Campaign', field: 'CampaignName',width:200, filter: "agTextColumnFilter" },
    { headerName: 'Workflow', field: 'WorkflowName',width:200, filter: "agTextColumnFilter" },
    { headerName: 'Status', field: 'StatusName',width:200, filter: "agTextColumnFilter" },
    { headerName: 'File', field: 'FileName',width:300, filter: "agTextColumnFilter" },
    { headerName: 'Assignee', field: 'AssigneeName',width:100, filter: "agTextColumnFilter" },
    { headerName: 'Role', field: 'AssigneeRole',width:100, filter: "agTextColumnFilter" },
    { headerName: 'Completed', field: 'Completed', width:100, filter: "agTextColumnFilter" }
  ];

  columnDefs = this.allColumns;

  gridApi;
  gridColumnApi;
  rowData: any[];
  filterModel: any = {};
  rowSelection:string;

  constructor(public dialog: MatDialog, public fileTrackerService: FileTrackerService) { 
    this.rowSelection = "single";
  }

  ngOnInit() {
    
    
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.fileTrackerService.getAllFiles().subscribe(response => {
      this.rowData = response;      
    });
  }  

  applyFilter(filterValue: string) {
    this.gridApi.setQuickFilter(filterValue);

  }

  filterByActive(val) {

    this.filterModel = Object.assign(this.filterModel, { Completed : { type:'equals', filter: val.checked ? 'Active' : '' } });

    this.gridApi.setFilterModel(this.filterModel);
    this.gridApi.onFilterChanged();

  }


  filterByStatus(val) {


    if(val === 'assigned')
      this.filterModel = Object.assign(this.filterModel, { AssigneeName : { type:'contains', filter: ' ' } });

    if(val === 'unassigned')
      this.filterModel = Object.assign(this.filterModel, { AssigneeName : { type:'equals', filter: '-' } });

    if(val === 'all')
      delete this.filterModel.AssigneeName;

    this.gridApi.setFilterModel(this.filterModel);
    this.gridApi.onFilterChanged();

  }

  onSelectionChanged() {
    const data = this.gridApi.getSelectedRows()[0];
    
    const dialogRef = this.dialog.open(FileComponent, {
      width: '875px',
      height: '750px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fileTrackerService.getAllFiles().subscribe(response => {
        this.rowData = response;      
      });
    });
  }


  onClick(row, scope) {

    const data = row.api.getSelectedRows()[0];
    const dialogRef = scope.dialog.open(FileComponent, {
      width: '875px',
      height: '750px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  toggleColumns(event) {
    this.columnDefs = event.value;
  }

  compareFnc(o1, o2) {
    return o1 === o2;
  }
}
