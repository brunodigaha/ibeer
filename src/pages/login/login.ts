import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service'

import { HomePage } from '../home/home'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  googleLogin(): void {
    // this.authProvider.googleLogin();
    this.authservice.login();
    this.navCtrl.push(HomePage);

  }

  facebookLogin(): void {
    // this.authProvider.facebookLogin();
    this.authservice.login();
    this.navCtrl.push(HomePage);
    
  }

}
