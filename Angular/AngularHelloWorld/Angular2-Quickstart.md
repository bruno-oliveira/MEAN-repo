## Useful Angular 2 tricks and tips learnt from the QuickStart App

(Note: All the code can be seen here: https://angular.io/docs/js/latest/quickstart.html )

This document aims to provide a useful collection of tricks, tips and good practices regarding web app development with Angular 2, all of these tips are taken from the quick-start tutorial and adapted into this helpful document.

### Basic directory structure for the Hello World App
```
.
├── app
   ├── app.component.js
   ├── main.js
├── bower_components
├── index.html
├── node_modules
├── package.json
└── styles.css
```
The above directory tree structure is the structure of our application with all the needed dependencies installed. It is a basic structure that offers yet, a basic understanding of some of the core Angular 2 principles - **reusability** and **modularity** - as we shall see later in this tutorial.

### Approach we will take (a close approach as to what we'd do in real life development)

   1. Set up our development environment
   2. Write the Angular root component for our app
   3. Bootstrap it to take control of the main web page
   4. Write the main page (index.html)
   5. Add some CSS (styles.css)

We'll briefly describe each step here, highlighting the most important points with a special emphasis on Angular 2 good practices.

#### 1. Setting up the development environment
This step can be platform-specific, so general guidelines will be given.

Node, npm (its package manager) and AngularJS must be installed. All of these can be grabbed from their official websites (and remember, installing node, installs npm as well).

After that is installed, we can use a common practice (i.e. to specify all of our app's dependencies in a package.json file), that for this example will be as follows:

```json
{
  "name": "angular2-quickstart",
  "version": "1.0.0",
  "scripts": {
    "start": "npm run lite",
    "lite": "lite-server"
  },
  "license": "ISC",
  "dependencies": {
    "@angular/common": "2.0.0-rc.4",
    "@angular/compiler": "2.0.0-rc.4",
    "@angular/core": "2.0.0-rc.4",
    "@angular/forms": "0.2.0",
    "@angular/http": "2.0.0-rc.4",
    "@angular/platform-browser": "2.0.0-rc.4",
    "@angular/platform-browser-dynamic": "2.0.0-rc.4",
    "@angular/router": "3.0.0-beta.1",
    "@angular/router-deprecated": "2.0.0-rc.2",
    "@angular/upgrade": "2.0.0-rc.4",

    "core-js": "^2.4.0",
    "reflect-metadata": "0.1.3",
    "rxjs": "5.0.0-beta.6",
    "zone.js": "0.6.12",

    "angular2-in-memory-web-api": "0.0.14",
    "bootstrap": "^3.3.6"
  },
  "devDependencies": {
    "concurrently": "^2.0.0",
    "lite-server": "^2.2.0"
  }
}
```
