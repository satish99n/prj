import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileTrackerComponent } from './file-tracker.component';
import { AgGridModule } from 'ag-grid-angular';

import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [...fromServices.services],
  entryComponents: [...fromComponents.components],
  declarations: [...fromComponents.components, FileTrackerComponent]
})
export class FileTrackerModule { }
