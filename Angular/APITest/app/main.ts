import {Component,bind} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {APP_BASE_HREF} from '@angular/common'
import {bootstrap}        from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
    
import{ComponentOne} from './component_one';
import{ComponentTwo} from './component_two';
import{CountriesList} from './app.component';
    
@Component({
  selector: 'my-app',
  template: `
    <h1>Component Router</h1>
    <nav>
      <a [routerLink]="['ComponentOne']">Component One</a><hr/>
      <a [routerLink]="['ComponentTwo']">Component Two</a><hr/>
      <a [routerLink]="['CountriesList']">List of countries</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/component-one', name: 'ComponentOne', component: ComponentOne},
  {path:'/component-two', name: 'ComponentTwo', component: ComponentTwo},
  {path:'/countries', name: 'CountriesList', component:CountriesList}
])
export class AppComponent { }
   
    bootstrap(AppComponent, [HTTP_PROVIDERS,
      ROUTER_PROVIDERS,bind(APP_BASE_HREF).toValue(location.pathname)
    ]);