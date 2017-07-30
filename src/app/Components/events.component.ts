import { Component, OnInit } from '@angular/core';
import { EventsService } from '../Services/events.service';
import { Event } from '../Model/event.type';

@Component({
    moduleId: module.id,
    selector: 'events',
    providers: [ EventsService ],
    templateUrl: './events.component.html',
    styleUrls: [
        '../../assets/css/common.css',
        '../../assets/css/events.component.css'
    ]
})
export class EventsComponent implements OnInit {
    constructor(private eventService: EventsService) { }

    events: Event[];
    selectedEvent: Event;

    getEvents(): void {
        this.eventService.getEvevnts().subscribe(
            data => this.events = data,
            err => console.error('Service error:', err)
        );
    }

    ngOnInit(): void {
        this.getEvents();
    }

    onSelect(event: Event): void {
       this.selectedEvent = event;
    }
}
