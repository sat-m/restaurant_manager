import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import {  of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TablesService } from '../../services/tables.service';
import * as TablesActions from "./tables.actions";

@Injectable()
export class TablesEffect {
  constructor(private actions$: Actions, private tablesService: TablesService) { }


  loadTablesList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TablesActions.loadTablesList),
      mergeMap(() => {
        return this.tablesService.getTables().pipe( 
          map(tableItem => ({ type: '[Tables Effect] Load List Success', payload: tableItem })),
          catchError(error => of({ type: '[Tables Effect] Load List Error', error: error }))
        )
      }
      )
    );
  });

  
}