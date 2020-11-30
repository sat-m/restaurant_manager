import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store';
import { loadTablesList } from '../store/tables/tables.actions';
import { Table } from '../store/tables/tables.reducer';
import { tableFilteredListSelector, errorSelector } from '../store/tables/tables.selector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
  myTables$: Observable<Table[]>;
  error: Error;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(loadTablesList());
    this.myTables$ = this.store.select(tableFilteredListSelector, null);
    this.store.select(errorSelector).subscribe((err) => {
      this.error = err;
    });
  }
}
