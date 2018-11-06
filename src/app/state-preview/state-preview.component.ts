import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as reducer from '../reducers/index';

@Component({
  selector: 'app-state-preview',
  templateUrl: './state-preview.component.html',
  styleUrls: ['./state-preview.component.css']
})
export class StatePreviewComponent implements OnInit {
  zipcode$: Observable<{}>;
  latitude: string;

  constructor(private store: Store<reducer.State>) {
    this.zipcode$ = this.store.select('zipcode');
  }

  ngOnInit() {
    this.zipcode$.subscribe((data: any) => {
      this.latitude = data.latitude;
    });
  }

}
