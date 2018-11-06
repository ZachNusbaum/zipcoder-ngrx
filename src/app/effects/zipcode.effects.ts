import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ZipcodeActionTypes } from '../actions/zipcode.actions';

@Injectable()
export class ZipcodeEffects {

  @Effect()
  loadZipcodes$ = this.actions$.pipe(ofType(ZipcodeActionTypes.LoadZipcodes));

  constructor(private actions$: Actions) {}
}
