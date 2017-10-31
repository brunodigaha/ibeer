import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompaniesService } from "../../services/companies.service"
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  company = { id: null, title: null };
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public companiesService: CompaniesService) {
    this.id = navParams.get('id');
    if (this.id != 0) {
      this.company = companiesService.getCompany(this.id);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
