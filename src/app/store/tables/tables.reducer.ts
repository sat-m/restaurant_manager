import { actionSheetController } from '@ionic/core';
import { createReducer, on } from '@ngrx/store';
import * as TableActions from './tables.actions';

export const tablesReducerKey = "tablesList";

export interface Reservation {
  id: string,
  tableId: string
  startDate: number,
}

export interface Table {
  id: string,
  location: string,
  numberOfSits: number,
  reservation?: Reservation
}

interface Filters {
  fromDate?: null | number,
  endDate?: null | number,
  numberOfSits?: null | number,
}

export interface TablesState {
  list: Table[],
  loading: boolean,
  error: any,
  filters?: Filters
}

const initialState: TablesState = {
  list: [],
  loading: false,
  error: null,
};

export const tablesReducer = createReducer(
  initialState,
  on(TableActions.loadTablesList, (state, action) => {
    return {
      ...state,
      loading: true,
      error: null
    }
  }),
  on(TableActions.loadTablesListSuccess, (state, action) => {
    return {
      ...state,
      list: [...action.payload],
      error: null
    }
  }),
  on(TableActions.loadTablesListError, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }),
  on(TableActions.addReservation, (state, action) => {
    const reserve = action.data;
    const newList = state.list.map((table) => {
      if (table.id === reserve.tableId) {
        return { ...table, reservation: reserve };
      }
      return table
    });
    return {
      ...state,
      list: newList
    }
  }),
  on(TableActions.applyFilter, (state, action) => {

    let filter = { ...action.filter };
    if (filter.fromDate) {
      filter.fromDate = new Date(filter.fromDate).getTime();
    } else if (filter.endDate) {
      filter.endDate = new Date(filter.endDate).getTime();
    }
    return {
      ...state,
      filters: { ...state.filters, ...filter },
      list: [...state.list]
    }
  }),
  on(TableActions.clearFilter, (state, action) => {

    return {
      ...state,
      filters: null,
      list: [...state.list]
    }
  }),
  on(TableActions.clearReservation, (state, action) => {

    //remove reservation from the table with a tableId
    const newState = {
      ...state,
      list: state.list.map((table) => {
        if (table.id === action.tableId) {
          let t = { ...table };
          delete t.reservation
          return t;
        }
        return table;
      })
    }

    return newState;
  })
);
