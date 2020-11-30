import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '.';
import { tablesReducerKey, TablesState } from './tables.reducer';

const tablesFeatureSelector = createFeatureSelector<TablesState>(tablesReducerKey);

export const tablesListSelector = createSelector(
  tablesFeatureSelector,
  (tablesState) => { return tablesState.list }
)
