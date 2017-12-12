import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {CountryCodeSelect} from "../countryCodeSelect/countryCodeSelect";


@Component({
  selector: 'page-phone-verify',
  templateUrl: 'phoneVerify.html'
})
export class PhoneVerifyPage {

  selectedIndex;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  selectCountry(){
    let modal = this.modalCtrl.create(CountryCodeSelect,{"selected":this.selectedIndex});

    console.log("Fresh start");

    modal.onDidDismiss((country,index) => {
      console.log(country);
      document.getElementById('cntr_lbl').innerHTML = "<span class='flag-icon flag-icon-"+country.code+"'></span>&nbsp;&nbsp;" + country.phone_code;
      this.selectedIndex = index;
    });

    modal.present();
  }
}
