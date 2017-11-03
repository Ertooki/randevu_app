import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from "../../providers/language.service";
import { LanguageModel } from "../../models/language.model";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {

  languages : Array<LanguageModel>;
  app_lang = "";

  constructor (public navCtrl: NavController, public translate: TranslateService, public languageService: LanguageService) {
    this.languages = this.languageService.getLanguages();
    this.setLanguage();
  }

  ionViewDidLoad() {
    this.app_lang =  this.translate.currentLang;
  }

  setLanguage(){
    let defaultLanguage = this.translate.getDefaultLang();
    if(this.app_lang){
      this.translate.setDefaultLang(this.app_lang);
      this.translate.use(this.app_lang);
    }else{
      this.app_lang = defaultLanguage;
      this.translate.use(defaultLanguage);
    }
  }
}
