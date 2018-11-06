import { Action } from '@ngrx/store';
import { ZipcodeActions, ZipcodeActionTypes } from '../actions/zipcode.actions';

export interface State {
  zip: string;
  latitude: number | string;
  longitude: number | string;
}

export const initialState: State = {
  zip: null,
  latitude: null,
  longitude: null
};

export function reducer(state = initialState, action: ZipcodeActions): State {
  switch (action.type) {

    case ZipcodeActionTypes.LoadZipcodes:
      return state;
    case ZipcodeActionTypes.InputZipcode:
      return Object.assign({}, state, action.payload);
    case ZipcodeActionTypes.ZipGeocoded:
      return Object.assign({}, state, action.payload);


    default:
      return state;
  }
}
