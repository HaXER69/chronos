// import json files to server.localHost()
import all from ./server.localHost.js;
// express app
const express = require('express');
const app = express();
const router = express.Router();

const path = require('path')

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html/index.html'));
});
app.use('/', router);

router.get('/fore.html', function(req, res){
  res.sendFile(path.join(__dirname, '/file.html'));
});
app.use('./fore.html', router);

//404 Error
app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/404.html');
});

var localHostURL = "http://localhost:3000";
const localHost = `${url}`

let server = app.listen(3000, function(){
  console.log("App server is running on port" + localHost);
  console.log("to end press Ctrl + C");
});