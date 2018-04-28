
# Doctory
This app aims to guide patients to choose suitable doctors in Amman according to their status. We added features to suggest either high rated(based on Jeeran website) or nearby doctors in emergency case.

## Prerequisites
Make sure you installed the following technologies locally:

    -React using webpack
    - Nodejs
    - Express
    - Mongodb

## Getting started & Installation

 - Get a copy of the repo 
`   $ git clone https://github.com/Dazzel-18/dazzel.git`

 -  install all dependencies found in 'packkage.json' file
 `$ npm install`
    
- Run  React server
  `$ npm run react-dev`
    
- Run react client
   `$ npm run server-dev`
   
## Running the test
`npm run test`


## File Hieghrarcy  
    dazzel+
    ..../server
    ........index.js (this includes server configuration and requests handling)
    ..../config
    ........passport.js (configuration for user authentication)
    ..../test
    ........serverSpec.js (simple test)
    ..../views
    ........admin.ejs   (view form admin page)
    ........doctorform.ejs (view form for doctor entry)
    ........login.ejs  (form for login)
    ........signup.ejs (form for signup)
    ..../database-mongo
    ........index.js (database connection and schema defination)
    ..../react-client
    ......../dist (include static files)
    ......../css 
    ............custom.css
    ........bundles.js
    ........index.html
    ......../src
    ............index.jsx (the main react file -dome rendering)
    ......../components
    ............Home.jsx (Home compoenent)
    ............Map.jsx (a component to show the google map)
    ............Nearest.jsx (a component to disply the closest doctors)
    ............Rate.jsx (a compnent to display the list of doctors based on rate)
    ............Specialities.jsx (a component to list doctor spcialization)
    ....package.json (includes all dependencies)
    ....README.md
    
    
## Delopyment
You can see a demo of the app in **Heroku**: https://app-dazzel.herokuapp.com/


## Contribution


## Authors
- Tal Omari - Product Owner.
- Nada Ghanem - Scrum master.
- Raed Awwad - Team member.
- Samer Salmeh - Team member.
- Sara Koki - Team member.


