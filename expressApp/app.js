//console.log("our express app");

var express = require("express");

var app= express();

var PORT = 3000;

//everything we do with express will be app.SOMEMETHOD

// when you go to / you get hi there
// when you go to / root, this happens
//req is an object contaning all of the info about the request that was made, that triggered this route
//res is all the info about what we are going to respond with

app.get("/", function(req, res){
res.send("Hi there MFFF!");
});

app.get("/bye", function(req, res){
    res.send("BYEEE!");
    console.log("Seomeone made a request to BYE");
});

//Route parameters
        // app.get("/r/subredditName") VERSUS app.get("/r/:subredditName")
        //cares about PATTERNS or PATHS
        app.get("/r/:subredditName", function( req, res){
            //console.log(req);
            console.log(req.params);
            res.send("welcome to a subreddit");
    });

//app.listen(process.env.PORT, process.env.IP); 
//all of this returns the number, LISTEN on particular port and IP

app.listen(PORT, function(){
    console.log("Server STARTED!" + PORT);
}); 

//app.get takes two parameters
// /bye is goodbye

//anytime you make changes, you have to restart the server (node app.js)
//ORDER OF ROUTES MATTER
//The first route that matches a route is the only one
