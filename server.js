// server.js
// where your node app starts

// init project
const express = require('express');
const port = process.env.PORT || 3000;

var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// enable trust proxy setting to true to get ip address details
app.set('trust proxy', true);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", (req, res) => {
  res.json({greeting: 'hello API'});
});

// API endpoint for header info request
app.get("/api/whoami", (req, res) => {
  var result = {
    ipaddress: null,
    language: null,
    software: null
  };
  result.ipaddress = req.ip;
  result.language = req.headers['accept-language'];
  result.software = req.headers['user-agent'];
  res.json(result);
});


// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
