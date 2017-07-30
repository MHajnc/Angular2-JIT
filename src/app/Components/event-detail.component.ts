import { Component, Input } from '@angular/core';
import { Event } from '../Model/event.type';

@Component({
    moduleId: module.id,
    selector: 'event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: [ '../../assets/css/event-detail.component.css' ]
})
export class EventDetailComponent {
    @Input()
    event: Event;
}