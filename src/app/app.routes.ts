import { RouterModule } from '@angular/router';

import { EventsComponent } from './Components/events.component';
import { OtherViewComponent } from './Components/other-view.component';

export const routing = RouterModule.forRoot([
    {
        path: 'other-view',
        component: OtherViewComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/events',
        pathMatch: 'full'
    }
]);