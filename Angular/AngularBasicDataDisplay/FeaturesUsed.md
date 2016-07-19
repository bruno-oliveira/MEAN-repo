# A brief description about the Angular 2 features used in this example

In this example, we display some basic data on our web app by using some Angular 2 features that we shall now explore more in-depth.

We display a list of "Heroes" on our main app, and in order to do that, we will use the following file structure:

```
.
├── app
   ├── app.component.ts
   ├── hero.ts
   ├── main.ts
├── bower_components
├── index.html
├── node_modules
├── package.json
├── typings.json
├── tsconfig.json
├── systemjs.config.js
└── styles.css
```

As it is possible to see by the file structure, we will be using TypeScript to write our code for this application.

The main difference between using js and ts, is that Angular 2 is (as of July 2016) more oriented towards using TypeScript, which, in turn, compiles to js but allows for a much more readable and clean code structure.

It actually affects how an AngularJS App can be structured since it allows for **modularity** by allowing modules to be exported/imported which encourages a modular design and code reuse, which are good practices to have when developing software.

## A first look at TypeScript classes

It is, as we seen, encouraged that applications in AngularJS 2 are designed with **reusability** and **modularity** in mind, and, for that effect, using classes can prove to be useful.

Thinking in OOP terms, a class is a a representation of some concept in the real world. And, in our example, we will define a class to represent a hero.

Our hero will have an id number and a name.

Using TypeScript, we define the class to represent our hero as follows:

```javascript
export class Hero {
    constructor(
        public id: number,
        public name: string) { }
}
```
We can see the class definition, the constructor receiving the attributes we have thought about previously, with the types fully declared and some extra syntax, namely, the _export_ keyword.

We use the **export** keyword to denote that we intend to use this definition outside the scope of the hero.ts file. As we do it, we can now import this class into other files, namely, our main component.

## The structure of a simple Angular 2 app

As this is a very simple app, it will not have **all** the necessary characteristics of a full-blown Angular 2 app, but, some logic can start to be reasoned about. Let's see:

- We abstract the data we want to represent and store it in a single typescript file with the name of the class representing the data, **hero.ts** in our example;
- We then need to import that class into our main component (that controls the UI and guides the user experience), called by convention **app.component.ts**;
- After we implement our main component and export the class that will define the data to be rendered in the view, we bootstrap the component in the file **main.ts**;

The _bootstrapping_ step is here the "magic" happens and its this step that allows the application to start in the browser.

All the previous components, services, functions, etc, should be perfectly correct and without errors in order for the bootstrap process to work. We will analyze the structure in more depth, as well as the bootstrapping process.

## Analysis of the file structure as an overview

One of the most distinctive features of using typescript, is that it allows for modularity by design.

Modules are designed with separation of concerns in mind, and modularity arises naturally. Things can be exported/imported into other modules to create reusable components and keeping the application structure clean.

Let's understand what this means on our simple Hero List application.

Any application in a real-world context, is subject to change and to grow. And that's one of the reasons why **modular design** and **concern separation** should be the keywords to keep in mind while developing. It's okay to stuff everything in a controller and make it work at first. While it might not be the recommended approach it still allows for some level of adaptation and modularity that is better than no structure at all. 

However, as both your experience, and codebase, grows, so should your maintenance concerns.

Let's see:

**hero.ts**
```javascript
export class Hero {
    constructor(
        public id: number,
        public name: string) { }
}
```

**main.ts**
```javascript
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
bootstrap(AppComponent);
```

**app.component.ts**
```javascript
import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>My favorite hero is: {{myHero.name}}</h2>
      <p>Heroes:</p>
      <ul>
        <li *ngFor="let hero of heroes">
          {{ hero.name }}
          </li>
      </ul>
      <p *ngIf="heroes.length > 3">There are many heroes!</p>
    `
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ];
    myHero = this.heroes[1];
}
```

Even in our small example, we can immediately see how structuring our files this way can be helpful, one of the most important files being the **main.ts** file.

### The importance of **main.ts**

The main.ts is, by convention, the file where the bootstrap process is done, and it is isolated from the rest of the code, for maintenance and testing reasons. **It is not possible to test a certain component or service if the bootstrap process is on it, because we want to test a single functionality and the bootstrap process would try to load the app into the browser, which would result in an error**
