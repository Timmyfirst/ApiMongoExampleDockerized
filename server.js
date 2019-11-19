var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Daily = require('./api/models/dailyModel'),
  Task = require('./api/models/testModel'), //created model loading here
  bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors());

// Database URI connection
const DbURI = "mongodb://localhost:27017/bdtest";
// Connecting to database
const connect = async function () {
  const uri = DbURI;
  console.log('Connecting to DB - URI: ', uri);
  return mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
};

(async () => {
   try {
    const connected = await connect();
   } catch(e) {
    console.log('Error happend while connecting to the DB: ', e.message)
   }
 })();
/*
connect().then(() => {
  console.log('Success of connection !');
}).catch((e) => {
  console.log('handle error here: ', e.message);
});

// mongoose instance connection url connection

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/bdtest", { useNewUrlParser: true }, { useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DATABASE: is running !')
});*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});*/


var routes = require('./api/routes/dailyRoute'); //importing route
routes(app); //register the route


app.listen(port, function () {
  console.log('CORS-enabled web server listening on port ' + port);
});

console.log('API: test RESTful API server started on port ' + port);

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
