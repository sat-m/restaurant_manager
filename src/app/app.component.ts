import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { applyFilter } from './store/tables/tables.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  sitsOptions: Array<number>;
  fromDate: string;
  toDate: string;
  minDate: string;
  numberOfSits: number

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store<AppState>
  ) {
    this.initializeApp();
    //TODO: sits options to be constructed basedon table sits, dynamically
    this.sitsOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    // this.fromDate ;
    this.minDate = new Date().toISOString();
  }

  ngOnInit() {

  }

  filterOnFromDate() {
    // dispatch a filter action
    this.store.dispatch(applyFilter({filter: {fromDate: this.fromDate}}))
    console.log("filterOnFromDate");
  }

  filterOnEndDate() {
    // dispatch a filter action
    this.store.dispatch(applyFilter({filter: {endDate: this.toDate}}))

    console.log("filterOnEndDate");
  }

  filterOnNumberOfSits() {
    
    console.log("filterOnNumberOfSits");
    this.store.dispatch(applyFilter({filter: {numberOfSits: this.numberOfSits}}))

    // dispatch a filter action
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
