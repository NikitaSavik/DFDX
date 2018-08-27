var express = require('express');
var app = express();
var path = require('path');

// Express + ejs setup
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// We have only one page, no need in routing
app.get('/', function (req, res) {
	res.render('index.html');
});

// Start listening at 80 port
app.listen(80, function () {
  console.log('Server listening on port 80!');
});
