
# angular-task

## Tech stack
- ![image](https://user-images.githubusercontent.com/52995963/160426530-d5807b8a-c6d2-4bd0-b5fd-8f469e3b09f4.png)
- [Angular CLI][cli]
- [NestJS][nestjs]
- UI modules:
  - [Bootstrap][bootstrap]
  - [ng-zorro][ng-zorro] UI component: `dropdown-menu`, `modal` and more
- [Netlify][netlify]
- [Heroku][heroku]

[cli]: https://cli.angular.io/
[nestjs]: https://nestjs.com/
[bootstrap]: https://getbootstrap.com/
[ng-zorro]: https://ng.ant.design/docs/introduce/en
[netlify]: https://www.netlify.com/
[heroku]: https://www.heroku.com/

## High level design

### Application architecture

AppModule will import:
- ![image](https://user-images.githubusercontent.com/52995963/160422241-e358c90b-fb0d-4afb-8b38-ec7c5db058cd.png)
- Angular needed modules such as `BrowserModule` and any module that need to run `forRoot`.
- I configured the router to lazy-load only when needed. For example, `LoginModule` when I open the URL at `/login` and `TaskModule` when the URL is `/tasks`. Inside each modules, I import whatever modules that are required.

## Features
### Angular application and simple Nest API
- [x] Easy to understand project structure
- [x] Simple CRUD list and its tasks
- [x] Filter tasks by status

While working with this application, I have the opportunity to revisit some of the interesting topics:
- Deploy Angular application to Netlify, Nestjs to Heroku

## Setting up development environment
- `git clone https://github.com/Hanh2212/angular-task.git`
- `npm install`
- `npm start` for angular web application
- The app should run on `http://localhost:4200`


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
## License
Feel free to use my code on your project!
[MIT](https://opensource.org/licenses/MIT)
