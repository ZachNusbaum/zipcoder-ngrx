import { Action } from '@ngrx/store';

export enum ZipcodeActionTypes {
  LoadZipcodes = '[Zipcode] Load Zipcodes',
  InputZipcode = '[Zipcode] Input Zipcode'
}

export class LoadZipcodes implements Action {
  readonly type = ZipcodeActionTypes.LoadZipcodes;
}

export class InputZipcode implements Action {
  readonly type = ZipcodeActionTypes.InputZipcode;
  constructor(public payload: {}) {}
}

export type ZipcodeActions = LoadZipcodes | InputZipcode;
