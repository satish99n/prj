import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileTrackerComponent } from './file-tracker/file-tracker.component';
import { FileMaskingComponent } from './file-masking/file-masking.component';

const routes: Routes = [
  { path: '', redirectTo: '/file-tracker', pathMatch: 'full' },
  { path: 'file-tracker', component: FileTrackerComponent },
  { path: 'file-masking', component: FileMaskingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents =  [
  FileMaskingComponent,
  FileTrackerComponent
  ];
