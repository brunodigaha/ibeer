import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    public islogin: boolean;

    constructor() {
        this.islogin = false;
    }

    public login() {
        this.islogin = true;
    }
}