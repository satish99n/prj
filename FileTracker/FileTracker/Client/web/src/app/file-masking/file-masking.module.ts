import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FileMaskingComponent } from './file-masking.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [FileMaskingComponent, FileUploadComponent]
})
export class FileMaskingModule { }
