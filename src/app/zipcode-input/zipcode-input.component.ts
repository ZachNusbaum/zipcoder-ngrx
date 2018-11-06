import { InputZipcode } from './../actions/zipcode.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State } from '../reducers';
import * as zipcodeReducer from '../reducers/zipcode.reducer';

@Component({
  selector: 'app-zipcode-input',
  templateUrl: './zipcode-input.component.html',
  styleUrls: ['./zipcode-input.component.css']
})
export class ZipcodeInputComponent implements OnInit {
  zipcode$: Observable<zipcodeReducer.State>;

  constructor(private store: Store<State>) {
    this.zipcode$ = this.store.select('zipcode');
  }

  ngOnInit() {
  }

  setZip(zip) {
    this.store.dispatch(new InputZipcode({zip: zip}));
    return false;
  }

}
