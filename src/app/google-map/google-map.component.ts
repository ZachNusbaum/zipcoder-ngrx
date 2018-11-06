import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import * as zipcodeReducer from '../reducers/zipcode.reducer';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  zipcode$: Observable<zipcodeReducer.State>;
  latitude: string;
  longitude: string;

  constructor(private store: Store<State>) {
    this.zipcode$ = this.store.select('zipcode');
  }

  ngOnInit() {
    this.zipcode$.subscribe((response: any) => {
      console.log('Loading data from store...', response);
      this.latitude = response.latitude;
      this.longitude = response.longitude;
    });
  }

  buildImageUrl() {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude},${this.longitude}&zoom=13&size=250x250&key=${environment.mapsKey}`;
  }

}
