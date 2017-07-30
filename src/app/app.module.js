"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var events_service_1 = require("./Services/events.service");
var app_component_1 = require("./app.component");
var app_header_component_1 = require("./Components/app-header.component");
var app_nav_component_1 = require("./Components/app-nav.component");
var app_main_component_1 = require("./Components/app-main.component");
var events_component_1 = require("./Components/events.component");
var event_detail_component_1 = require("./Components/event-detail.component");
var other_view_component_1 = require("./Components/other-view.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routes_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            app_header_component_1.AppHeaderComponent,
            app_nav_component_1.AppNavComponent,
            app_main_component_1.AppMainComponent,
            events_component_1.EventsComponent,
            event_detail_component_1.EventDetailComponent,
            other_view_component_1.OtherViewComponent
        ],
        providers: [events_service_1.EventsService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map