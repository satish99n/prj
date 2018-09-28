import { ObsproviderService } from './obsprovider.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ObservationDetailsComponent } from './observation-details/observation-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { PatientObservationComponent } from './patient-observation/patient-observation.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservationDetailsComponent,
    PatientObservationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ObsproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
