import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
    ngOnInit(): void {

    }

    constructor() {
        console.log('Hello from Root Component');
    }
}
