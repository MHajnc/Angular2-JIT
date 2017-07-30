"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var events_component_1 = require("./Components/events.component");
var other_view_component_1 = require("./Components/other-view.component");
exports.routing = router_1.RouterModule.forRoot([
    {
        path: 'other-view',
        component: other_view_component_1.OtherViewComponent
    },
    {
        path: 'events',
        component: events_component_1.EventsComponent
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
//# sourceMappingURL=app.routes.js.map