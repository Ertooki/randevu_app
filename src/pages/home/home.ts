import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bar = { "test": 'bar' };

  constructor(public navCtrl: NavController) {

  }

  openSettings() {
    console.log("Settings clicked");
    this.navCtrl.push(SettingsPage);
  }
}
