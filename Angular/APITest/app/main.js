"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var component_one_1 = require('./component_one');
var component_two_1 = require('./component_two');
var app_component_1 = require('./app.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>Component Router</h1>\n    <nav>\n      <a [routerLink]=\"['ComponentOne']\">Component One</a><hr/>\n      <a [routerLink]=\"['ComponentTwo']\">Component Two</a><hr/>\n      <a [routerLink]=\"['CountriesList']\">List of countries</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/component-one', name: 'ComponentOne', component: component_one_1.ComponentOne },
            { path: '/component-two', name: 'ComponentTwo', component: component_two_1.ComponentTwo },
            { path: '/countries', name: 'CountriesList', component: app_component_1.CountriesList }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS,
    router_deprecated_1.ROUTER_PROVIDERS, core_1.bind(common_1.APP_BASE_HREF).toValue(location.pathname)
]);
//# sourceMappingURL=main.js.map