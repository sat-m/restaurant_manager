import { ActionReducerMap } from '@ngrx/store';
import { tablesReducer, tablesReducerKey, TablesState } from './tables/tables.reducer';

export interface AppState {
  [tablesReducerKey]: TablesState,
}

export const allReducers:ActionReducerMap<AppState> = {
  [tablesReducerKey]: tablesReducer,
}