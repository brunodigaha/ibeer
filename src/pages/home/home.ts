import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompaniesService } from '../../services/companies.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  companies = [];
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController, public companiesService : CompaniesService) {
    this.companies = companiesService.getCompanies();
  }

  public goToDetail(id){
    this.navCtrl.push(DetailPage, {id:id});
  }

}
