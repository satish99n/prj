import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AgGridModule } from 'ag-grid-angular';

import { FileMaskingModule } from './file-masking/file-masking.module';
import { FileTrackerModule } from './file-tracker/file-tracker.module';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FileMaskingModule,
    FileTrackerModule,
    MaterialModule,
    AgGridModule.withComponents([]),
    AppRoutingModule // Always last!
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
