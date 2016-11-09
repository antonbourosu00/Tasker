var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index'); 
var tasks = require('./routes/tasks');
//before create a dir with index.js and tasks.js


const port  = 3000;

var app = express();

// Views engine..ejs is somethind like jade(pug)
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Here we set Static folder
app.use(express.static(path.join(__dirname, 'client')));

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.use('/', index);
app.use('/api', tasks);

app.listen(port, function() {
	console.log("Server start on port "+ port);
});