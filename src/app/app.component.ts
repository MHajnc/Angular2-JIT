import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sample-app',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ '../../assets/css/reset.css', '../../assets/css/app.component.css' ]

})
export class AppComponent {
    appTitle = 'Mariusz Hajnc sample App';
}
