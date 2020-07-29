var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/taskModel'), //created model loading here
  bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors());

// Database URI connection
const DbURI = "mongodb://192.168.56.10:27017/bdtest"
//const DbURI = "mongodb://localhost:27017/bdtest";
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/taskRoute'); //importing route
routes(app); //register the route

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port ' + port);
});

console.log('API: test RESTful API server started on port ' + port);
