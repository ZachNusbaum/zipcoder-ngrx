import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as zipcodeReducer from './zipcode.reducer';

export interface State {
  zipcode: zipcodeReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  zipcode: zipcodeReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
