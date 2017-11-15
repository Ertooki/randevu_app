import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'country-code-select',
  templateUrl: 'countryCodeSelect.html'
})
export class CountryCodeSelect {

  countries: any = [{"code": "ua", name:"Ukraine", "phone_code":"+38"},{"code": "us", name:"United States", "phone_code":"+1"}];
  country: any;
  selectedIndex;

  constructor(public navCtrl: NavController, params: NavParams, public viewCtrl: ViewController) {
    this.selectedIndex = params.get("selected");
    this.country = this.countries[this.selectedIndex];
    console.log(this.country,this.selectedIndex);
  }

  selectCountry(country) {
    this.country = country;
    this.selectedIndex = this.countries.indexOf(this.country);
    this.viewCtrl.dismiss(this.country, this.selectedIndex);
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
