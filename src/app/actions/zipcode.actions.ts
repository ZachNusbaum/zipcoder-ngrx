import { Action } from '@ngrx/store';

export enum ZipcodeActionTypes {
  LoadZipcodes = '[Zipcode] Load Zipcodes',
  InputZipcode = '[Zipcode] Input Zipcode',
  ZipGeocoded = '[Zipcode] Geocoded'

}

export class LoadZipcodes implements Action {
  readonly type = ZipcodeActionTypes.LoadZipcodes;
}

export class InputZipcode implements Action {
  readonly type = ZipcodeActionTypes.InputZipcode;
  constructor(public payload: {}) {}
}

export class ZipGeocoded implements Action {
  readonly type = ZipcodeActionTypes.ZipGeocoded;
  constructor(public payload: {}) {}
}

export type ZipcodeActions = LoadZipcodes | InputZipcode | ZipGeocoded;
