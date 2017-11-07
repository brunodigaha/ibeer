import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service'

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public userProfile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthService) {
  }

  ionViewDidLoad() {
    this.userProfile = this.authservice.getUser();
  }

}
