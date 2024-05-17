import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import config from 'devextreme/core/config';
import { licenseKey } from './devextreme-license';
config({
    licenseKey:licenseKey
})
@Component({
    standalone: true,
    imports: [ RouterModule,HttpClientModule],
    providers: [],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = '';
    public screen:any;
    constructor(){

    }

    public ngOnInit(){
    }
}
