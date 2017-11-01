import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database'

@Injectable()
export class CompaniesService {
    constructor(public afDB: AngularFireDatabase){}
    
    companies = [];

    public getCompanies() {
        return this.afDB.list('companies/').valueChanges();
    }

    public getCompany(id) {
        return this.afDB.object('companies/'+id).valueChanges();
    }

}