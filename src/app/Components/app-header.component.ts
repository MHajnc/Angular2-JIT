import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    inputs: ['appTitle'],
    templateUrl: './app-header.component.html',
    styleUrls: [ '../../assets/css/app-header.component.css']
})
export class AppHeaderComponent {
}