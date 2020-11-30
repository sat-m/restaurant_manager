import { createReducer, on } from '@ngrx/store';
import * as TableActions from './tables.actions';

export const tablesReducerKey = "tablesList";

export interface Table {
  id: string,
  location: string,
  numberOfSits: number,
}

export interface TablesState {
  list: Table[],
  loading: boolean,
  error: any,
}

const initialState: TablesState = {
  list: [],
  loading: false,
  error: null
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
  })
);
