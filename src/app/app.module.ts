import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CompaniesService } from '../services/companies.service';
import { DetailPage } from '../pages/detail/detail';
import { ModalContentPage } from '../pages/detail/detail-modal-coments'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyABH3q2jUn4RYYZg7haCtSvDa1M_9-sSVY",
    authDomain: "appcerveja-c7193.firebaseapp.com",
    databaseURL: "https://appcerveja-c7193.firebaseio.com",
    storageBucket: "appcerveja-c7193.appspot.com",
    messagingSenderId: "73842860695"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CompaniesService,
    CallNumber
  ]
})
export class AppModule { }
