var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res){
	res.render('home');
});

app.get('/friends', function(req, res){
	res.render('friends');
});

app.listen(3000, function(){
	console.log('Server has started');
});
