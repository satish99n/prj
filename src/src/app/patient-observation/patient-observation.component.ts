import { Observation } from './../observation';
import { ObsproviderService } from './../obsprovider.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';



@Component({
  selector: 'app-patient-observation',
  templateUrl: './patient-observation.component.html',
  styleUrls: ['./patient-observation.component.css']
})
export class PatientObservationComponent implements OnInit {

  obsList: Observation[];
  constructor(
    private obsService: ObsproviderService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAllPatientObs();
  }

  getAllPatientObs() {
    
    return this.obsService.getAllObs().then(observations => {
        this.obsList = Array.of(observations);
       
    });
}
}
