# Test assignment for Telia Software Development Internship
The assignment is to build a small web-application for an Estonian-English dictionary.
The application's back-end is built with Spring Boot, front-end is built with Angular.
The application's back-end is available [here](https://github.com/anetaclaudia/vocabulary-backend)

## Prerequisites
Make sure you have Node.js installed on your device, and it is added to your environment variable.

## Running the application locally
These instructions only include running application's front-end. To see instructions about back-end, go see [back-end's project](https://github.com/anetaclaudia/vocabulary-backend)
1. Download or clone the project.
2. Open the project in your preferred IDE or run it form commandline.
3. Open IDE's inner terminal - make sure your directory is `vocabulary-frontend`. If you're running the project from the command line, same goes here - switch into the project directory.
   - In your project directory, run `npm install` - it should add all the needed node modules.
   - Add Angular CLI to the project. For that, run `npm install -g @angular/cli`
   - Run `npm run ng build`
   - Run `ng serve`
   - Application's front-end should be accessible from your browser on `http://localhost:4200/`. 

