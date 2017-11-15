import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from "../settings/settings";
import { NativeStorage } from "@ionic-native/native-storage"
import {PhoneVerifyPage} from "../phoneVerify/phoneVerify";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bar = { "test": 'bar' };

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage) {

  }

  ionViewWillEnter(){
    this.nativeStorage.getItem("isLogged")
      .then(
        data => console.log("isLogged"),
        error => this.navCtrl.setRoot(PhoneVerifyPage)
      );
  }

  openSettings() {
    console.log("Settings clicked");
    this.navCtrl.push(SettingsPage);
  }
}
