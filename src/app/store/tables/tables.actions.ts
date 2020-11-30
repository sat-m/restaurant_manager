import { createAction, props } from '@ngrx/store';
import { Reservation, Table } from './tables.reducer';

export const loadTablesList = createAction('[Tables Page] Load List');
export const loadTablesListSuccess = createAction('[Tables Effect] Load List Success', props<{ payload: Table[] }>());
export const loadTablesListError = createAction('[Tables Effect] Load List Error', props<{ error: Error }>());
export const addReservation = createAction('[Reservation Page] Make Reservation', props<{ data: Reservation }>());
export const applyFilter = createAction('[Root Page] Apply Filter', props<{ filter: any }>());
export const clearFilter = createAction('[Root Page] Clear Filter');
export const clearReservation = createAction('[Root Page] Clear Reservation', props<{ tableId: string }>());

