import { Action } from '@ngrx/store';
import { ZipcodeActions, ZipcodeActionTypes } from '../actions/zipcode.actions';

export interface State {
  zip: string;
  latitude: number | string;
  longitude: number | string;
  city: string;
  state: string;
}

export const initialState: State = {
  zip: null,
  latitude: null,
  longitude: null,
  city: null,
  state: null
};

export const getLatitude = (state: State) => state.latitude;
export const getLongitude = (state: State) => state.longitude;

export function reducer(state = initialState, action: ZipcodeActions): State {
  console.log(action.type, action);
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
