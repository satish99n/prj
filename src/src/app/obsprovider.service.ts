import { Observation } from './observation';
import { Injectable } from '@angular/core';
import  { Http,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

import {Observable} from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Injectable({ 
  providedIn: 'root'
})
export class ObsproviderService {
  private observationUrl = 'http://fhir.hl7fundamentals.org/baseDstu3/Observation';  // URL to web API
  private patientObsUrl = 'http://fhir.hl7fundamentals.org/baseDstu3/Observation?patient=346';
  //private headers = new Headers({'Content-Type': 'application/json'});
  data: Observation[];
  constructor(private http: Http) { }
  
  getObsDetail(id: number)  {
    const url = `${this.observationUrl}/${id}`;
    
    console.log(url+" given url");
        
      return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Observation)
    .catch(this.handleError);  
    
  }

  getAllObs(): Promise<any>{
   // const urlForID =  `${this.patientObsUrl}/${id}`;
     return this.http.get(this.patientObsUrl)
    .toPromise()
    .then(response => response.json() )
    .catch(this.handleError); 
    
}

   private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
