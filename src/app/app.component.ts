import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import config from 'devextreme/core/config';
import { licenseKey } from './devextreme-license';
import { Issue1Component } from './Issue1/issue1.component';
import { Issue2Component } from './Issue2/issue2.component';
import { Issue3Component } from './Issue3/issue3.component';
config({
    licenseKey:licenseKey
})
@Component({
    standalone: true,
    imports: [ RouterModule,HttpClientModule,Issue1Component,Issue2Component,Issue3Component],
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
