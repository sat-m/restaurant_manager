import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { applyFilter, clearFilter } from './store/tables/tables.actions';
import { sitsNumberSelector } from './store/tables/tables.selector';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  sitsOptions: Array<number>;
  fromDate: string;
  toDate: string;
  minDate: string;
  numberOfSits: number;

  public get anyFilter() {
    return this.numberOfSits || this.fromDate || this.toDate;
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store<AppState>
  ) {
    this.initializeApp();
    this.minDate = new Date().toISOString();
  }

  ngOnInit() {
    this.store.select(sitsNumberSelector)
      .subscribe((sitsOptions) => {
        this.sitsOptions = sitsOptions;
      });
  }

  filterOnFromDate() {
    this.store.dispatch(applyFilter({ filter: { fromDate: this.fromDate } }));
  }

  filterOnEndDate() {
    this.store.dispatch(applyFilter({ filter: { endDate: this.toDate } }));
  }

  filterOnNumberOfSits() {
    this.store.dispatch(applyFilter({ filter: { numberOfSits: this.numberOfSits } }));
  }

  clearFilter() {
    this.fromDate = undefined;
    this.toDate = null;
    this.numberOfSits = null;
    this.store.dispatch(clearFilter());
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
