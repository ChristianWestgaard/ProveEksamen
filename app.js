var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static("public"))

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index');
});

// about page
app.get('/item', function(req, res) {
  res.render('item');
});

app.get('/about', function(req, res){
  res.render('about')
})

app.get('/logInn', function(req, res){
  res.render('logInn')
})

app.listen(8080);
console.log('Server is listening on port 8080');
