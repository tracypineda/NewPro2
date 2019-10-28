var express = require("express");
var bodyParser = require('body-parser');

// Set up the express app
var app = express();
var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//DB Connection
require("./database/connection");

// Setup a default catch-all route that sends back a Hello World message
app.get('/', (req, res) => res.send('Hello World!'))

// Require our routes into the application.
require('./routes')(app);
app.get('*', (req,res) => res.status(200).send({
  message: 'Welcome to the beginning of our Race Registration App.',
}));

module.exports = app;
//-------------------------------------------

//Console Log to display Express Server Port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))