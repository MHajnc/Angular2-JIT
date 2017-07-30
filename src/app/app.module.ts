import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { EventsService } from './Services/events.service';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './Components/app-header.component';
import { AppNavComponent } from './Components/app-nav.component';
import { AppMainComponent } from './Components/app-main.component';
import { EventsComponent } from './Components/events.component';
import { EventDetailComponent } from './Components/event-detail.component';
import { OtherViewComponent } from './Components/other-view.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppNavComponent,
        AppMainComponent,
        EventsComponent,
        EventDetailComponent,
        OtherViewComponent
    ],
    providers: [ EventsService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
