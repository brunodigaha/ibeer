import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompaniesService } from '../../services/companies.service';
import { DetailPage } from '../detail/detail';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  companies: Observable<any[]>;
  length = 0;
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController, public companiesService: CompaniesService) {
    this.companies = companiesService.getCompanies();
    // companiesService.getCompanies().subscribe( companies => {
    //   this.companies = Object.assign(companies);
    //   this.length = Object.keys(companies).length;
    // });
  }

  public goToDetail(id) {
    this.navCtrl.push(DetailPage, { id: id });
  }


}
