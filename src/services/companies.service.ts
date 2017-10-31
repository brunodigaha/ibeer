import { Injectable } from '@angular/core';

@Injectable()
export class CompaniesService{
    companies = [
        {id:1, title:"Ponto da Cerveja", address:"R. Salesianos, 425", neighborhood:"Pq. das Orquídeas", phone:"35 3551 7001"},
        {id:2, title:"Emporio da Cerveja"},
        {id:3, title:"Cervejao"},
        {id:4, title:"Bar do Broa"},
        {id:5, title:"Tonin Atacado"},
        {id:6, title:"RVM - Good Stop"}
    ];

    public getCompanies(){
        return this.companies;
    }

    public getCompany(id){
        return this.companies.filter(function(e, i){ return e.id == id })[0] || {id:null, title:null};
    }
}