import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ZipcodeActionTypes } from '../actions/zipcode.actions';
import { catchError, map, merge, mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class ZipcodeEffects {

  @Effect()
  loadZipcodes$ = this.actions$.pipe(ofType(ZipcodeActionTypes.LoadZipcodes));

  @Effect()
  geocode$ = this.actions$.pipe(
    ofType(ZipcodeActionTypes.InputZipcode),
    switchMap((result: any) => {
      console.log('result', result.payload);
      return this.http.get(`https://zippopotam.us/us/${result.payload.zip}`).pipe(
        map((data: any) => {
            return {
                type: ZipcodeActionTypes.ZipGeocoded,
                payload: {latitude:  data.places[0]['latitude'], longitude: data.places[0]['longitude']}
            };
          }
        )
      );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
