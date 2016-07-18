 import {Component/*,View*/} from '@angular/core';
 
 @Component({
    template: `
    <h1>Second Component</h1>
    `
  })
  
  export class ComponentTwo{
    constructor(){
      
      console.log("Second component being called");
    }
    }