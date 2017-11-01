import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompaniesService } from "../../services/companies.service"
import { ModalContentPage } from "./detail-modal-coments"
import { CallNumber } from '@ionic-native/call-number'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  company = { 
    id: null,
    title: null,
    nickname: null,
    address: null,
    neighborhood: null,
    city: null,
    state: null,
    zipcode: null,
    phone: null
  };
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public companiesService: CompaniesService, public modalCtrl: ModalController, private callNumber: CallNumber) {
    this.id = navParams.get('id');
    if (this.id != 0) {
      // this.company = companiesService.getCompany(this.id);
      companiesService.getCompany(this.id).subscribe(company => {
        try {
          this.company = Object.assign(company);
          throw new TypeError("Error message");
        }
        catch (e){
          console.log((<Error>e).message);//conversion to Error type
        }
      });
    }
  }

  public callPhone(phone){
    this.callNumber.callNumber(phone, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  openModal() {

    let modal = this.modalCtrl.create(ModalContentPage);
    modal.present();
  }

}