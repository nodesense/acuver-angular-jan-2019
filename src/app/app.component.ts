import {Component, OnInit} from '@angular/core';

@Component({
    // meta data, this is for angular framework
    selector: 'app-root', // html tag <app-root> </app-root>
    // View, html template
    templateUrl: 'app.component.html',
    // scopped style, for this component only
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent implements OnInit {
    // member attributes
    title = 'Product app'; // model/data

    // called before initializing view
    constructor() {
        console.log('App comp created');
    }

    // life cycle, after view initialized
    ngOnInit() {
        console.log('AppComponent Init');
    }
}
