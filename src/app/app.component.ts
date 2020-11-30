import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  sitsOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  fromDate = new Date().toISOString();
  minDate = new Date().toISOString();
  numberOfSits: number

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  ngOnInit() {
  }

  filterOnFromDate() {
    // dispatch a filter action
    console.log("filterOnFromDate");
    

  }

  filterOnEndDate() {
    // dispatch a filter action
    console.log("filterOnEndDate");


  }

  filterOnNumberOfSits() {
    console.log("filterOnNumberOfSits");

    // dispatch a filter action
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
