 import {Component/*,View*/} from '@angular/core';
 
 @Component({
    template: `
    <h1>first Component</h1>
    `
  })
  
  export class ComponentOne{
    constructor(){
      
      console.log("first component being called");
    }
    }