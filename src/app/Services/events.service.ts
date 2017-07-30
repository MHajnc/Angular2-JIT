import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Event } from '../Model/event.type';

@Injectable()
export class EventsService {
    constructor(private http: Http) { }

    getEvevnts(): Observable<Event[]> {
        const apiUrl = 'https://api.myjson.com/bins/uxo2r';

        return this.http
               .get(apiUrl)
               .map(response => response.json() as Event[])
    }
}