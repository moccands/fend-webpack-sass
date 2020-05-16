var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
var aylien = require('aylien_textapi');
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

const app = express()

app.use(express.static('dist'))

const bodyParser = require("body-parser");
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
    console.log(`Your API key is ${process.env.API_KEY}`);

})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/analyseText',function(request,res){
    textapi.sentiment({
        'text': request.body.data,
        "mode": "document"
    }, function(error, response) {
      if (error === null) {
        console.log(response);
        res.send(response);
      }
      else {
          console.log('ERROR '+error);
          res.send({text:"Invalid request"});
      }
  });
})
