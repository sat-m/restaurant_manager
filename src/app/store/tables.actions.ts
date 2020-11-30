import { createAction, props } from '@ngrx/store';
import { Table } from './tables.reducer';

export const loadTablesList = createAction('[Tables Page] Load List');

export const loadTablesListSuccess = createAction('[Tables Effect] Load List Success', props<{ payload: Table[] }>());

export const loadTablesListError = createAction('[Tables Effect] Load List Error', props<{ error: Error }>());



