import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Table, tablesReducerKey, TablesState } from './tables.reducer';

const tablesFeatureSelector = createFeatureSelector<TablesState>(tablesReducerKey);

export const tableFilteredListSelector = createSelector(
  tablesFeatureSelector,
  (tablesState) => {
    let list = [...tablesState.list];
    if (tablesState.filters) {
      const filters = tablesState.filters;
      if (filters.numberOfSits) {
        list = list.filter((table) => {
          return table.numberOfSits === filters.numberOfSits;
        });
      }
      if (filters.endDate) {
        list = list.filter((table) => {
          return table.reservation && table.reservation.startDate <= filters.endDate;
        });
      }
      if (filters.fromDate) {
        list = list.filter((table) => {
          return table.reservation && table.reservation.startDate >= filters.fromDate;
        });
      }
    }
    return list;
  }
);

export const nonReservedTablesSelector = createSelector(
  tablesFeatureSelector,
  (tablesState) => {
    // return only the tables that do not have reservation
    return tablesState.list.filter((table) => {
      return !table.reservation;
    });
  }
);

export const sitsNumberSelector = createSelector(
  tablesFeatureSelector,
  (tablesState) => {
    const list = [];
    tablesState.list.forEach((table) => {
      if (list.indexOf(table.numberOfSits) === -1) {
        list.push(table.numberOfSits);
      }
    });
    return list.sort();
  }
);

export const errorSelector = createSelector(
  tablesFeatureSelector,
  (state) => state.error
);
