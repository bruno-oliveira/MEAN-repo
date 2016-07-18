 import {Component,Directive} from '@angular/core';
 import {CORE_DIRECTIVES} from '@angular/common'
 import {Http, Response,HTTP_PROVIDERS} from '@angular/http';
 import 'rxjs/Rx';
 @Component({
    template: `
    <h1>Countries List</h1>
    <ul>
      <li *ngFor="#i of result">
          {{i.name}}
      </li>
    </ul>
    `,
    directives:[CORE_DIRECTIVES]
  })
  
  export class CountriesList{
    
      result:Array<Object>; 
      constructor(http: Http) { 
        console.log("Friends are being called");
        http.get('https://restcountries.eu/rest/v1/region/africa')
                      .map(response => response.json())
                      .subscribe(result => this.result =result);
                      
       }
  }