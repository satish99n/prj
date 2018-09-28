import { ObsproviderService } from './../obsprovider.service';
import { Observation } from './../observation';

import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-observation-details',
  templateUrl: './observation-details.component.html',
  styleUrls: ['./observation-details.component.css']
})
export class ObservationDetailsComponent implements OnInit {

  obs: Observation;
  obsList: Observation[];
  checkPath: string;
  constructor(
    private obsService: ObsproviderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }



  ngOnInit() {

     
      console.log( "routing path");
    this.getPatientObs();
    
  }


     getAllPatientObs() {
        
        return this.obsService.getAllObs().then(observations => {
            this.obsList = Array.of(observations);
            console.log(typeof observations+ " type ");
           
        });
    }

     getPatientObs(): void {
        this.route.params.pipe(switchMap((params: Params) => this.obsService.getObsDetail(+params['id'])))
            .subscribe(observation => {
                this.obs = observation;
            });
    }
}
