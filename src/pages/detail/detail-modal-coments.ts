import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';


@Component({
    templateUrl: 'detail-modal-coments.html'
})
export class ModalContentPage {
    comments;

    constructor(public params: NavParams, public viewCtrl: ViewController) {

        var comments = [
            {
                name: 'Marcos',
                image: 'assets/imgs/gravatar.png',
                quote: 'cerveja geladinha'
            },
            {
                name: 'Jane',
                image: 'assets/imgs/gravatar.png',
                quote: 'A entrega eh bem geladinha'
            },
            {
                name: 'Cleriston',
                image: 'assets/imgs/gravatar.png',
                quote: 'Tem aperitivos gostosos'
            }
        ];
        // this.comments = comments[this.params.get('charNum')];
        this.comments = comments;
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}