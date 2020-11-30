import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store';
import { loadTablesList } from '../store/tables/tables.actions';
import { Table } from '../store/tables/tables.reducer';
import { tablesListSelector } from '../store/tables/tables.selector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myTables$: Observable<Table[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(){
    this.store.dispatch(loadTablesList());
    this.myTables$ = this.store.select(tablesListSelector, null)
  }
}
