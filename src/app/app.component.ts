import { ZipcodeActionTypes, InputZipcode } from './actions/zipcode.actions';
import { State } from './reducers/index';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StoreDemo';
  zipcode$: Observable<{}>;
  constructor(private store: Store<State>) {
    this.zipcode$ = this.store.select('zipcode');
  }
}
