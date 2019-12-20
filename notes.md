### To start the application in development mode

`npm run react:start`

The reason we changed the script is because heroku looks for the `start` script as the command to get your app up and running. We need our express application to host our build react app for it to work on their systems. So now when we deploy our application heroku automatically runs our `build` script, then runs the `start` script which is set to `node server.js`.


INITIAL ONE

  // "scripts": {
     "start": "react-scripts start",
  "build": "react-scripts build",
   "test": "react-scripts test",
       "eject": "react-scripts eject"



FIXED BY TUCKER 

 "scripts": {
    "start": "node server.js",
    "react:start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  
