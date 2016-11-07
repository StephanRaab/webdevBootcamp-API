var express = require('express');
var app = express();

var request = require('request');

app.get("/results", function(req, res){
  request("http://omdbapi.com/?s=karate", function(error, response, body){
    if(!error && response.statusCode == 200){
      var parsedBody = JSON.parse(body);
      res.send(parsedBody["Search"][0]["Title"]);
    }
  });
});

app.listen(3000, function(){
  console.log("MovieApp Server started on localhost:3000");
});
