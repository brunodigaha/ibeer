import { Injectable } from '@angular/core';

@Injectable()
export class CompaniesService {
    companies = [
        { id: 1, title: "Ponto da Cerveja", address: "R. Salesianos, 425", neighborhood: "Pq. das Orquídeas", phone: "35 3551 7001" },
        { id: 2, title: "Emporio da Cerveja", address: "R. São João, 45", neighborhood: "Pq. Municípios", phone: "35 3551 1145" },
        { id: 3, title: "Cervejao", address: "R. Alfreds, 5", neighborhood: "Taboão", phone: "35 3551 8801" },
        { id: 4, title: "Bar do Broa", address: "R. Alameda Jośe das Alves, 1025", neighborhood: "Jardim Alvorada", phone: "35 3551 5597" },
        { id: 5, title: "Tonin Atacado" },
        { id: 6, title: "RVM - Good Stop" }
    ];

    public getCompanies() {
        return this.companies;
    }

    public getCompany(id) {
        return this.companies.filter(function (e, i) { return e.id == id })[0] || { id: null, title: null };
    }
}