import { Injectable } from '@angular/core';

@Injectable()
export class CompaniesService {
    companies = [
        { id: 1, title: "Ponto da Cerveja", nickname: "pontodacerveja", address: "R. Salesianos, 425", neighborhood: "Pq. das Orquídeas", city: "Guaxupé", state: "MG", zipcode: "37800-000", phone: "35 3551 7001" },
        { id: 2, title: "Empório da Cerveja", nickname: "emporiodacerveja", address: "R. São João, 45", neighborhood: "Centro", city: "Guaxupé", state: "MG", zipcode: "37800-000", phone: "35 3551 1145" },
        { id: 3, title: "Cervejão", nickname: "cervejao", address: "Av. Dona Floriana, 948", neighborhood: "Centro", city: "Guaxupé", state: "MG", zipcode: "37800-000", phone: "35 3551 8801" },
        { id: 4, title: "Disk Cerveja do Broa", nickname: "diskcervejadobroa", address: "R. Manoel Cabral, 300", neighborhood: "Vila Carloni", city: "Guaxupé", state: "MG", zipcode: "37800-000", phone: "35 3551 5007" },
        { id: 5, title: "Tonin Atacado", nickname: "toninatacado", address: "R. Cap. Martimiano Prado, 95", neighborhood: "Centro", city: "Guaxupé", state: "MG", zipcode: "37800-000", phone: "35 3559 2550"},
        { id: 6, title: "RVM - Good Stop", nickname: "rvmgoodstop", address: "Rua Padre João José, 20", neighborhood: "Centro", city: "Guaxupé", state: "MG", zipcode: "37800-000", phone: "35 3551 3587"}
    ];

    public getCompanies() {
        return this.companies;
    }

    public getCompany(id) {
        return this.companies.filter(function (e, i) { return e.id == id })[0] || { id: null, title: null };
    }
}