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

Modules are designed with separation of concerns in mind and modularity arises naturally. Things can be exported/imported into other modules to create reusable components and keeping the application structure clean.
