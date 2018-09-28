import { ObservationDetailsComponent } from './observation-details/observation-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientObservationComponent } from 'src/app/patient-observation/patient-observation.component';


const routes: Routes = [
   
  { path: '', redirectTo: '/patient', pathMatch: 'full' },
  { path: 'patient',  component: PatientObservationComponent },
  { path:'detail/:id', component: ObservationDetailsComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes), RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
