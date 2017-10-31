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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
