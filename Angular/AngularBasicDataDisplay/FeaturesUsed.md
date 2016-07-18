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


