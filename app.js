const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV; // development

//-------APP-SET--------------
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//-------------Connect to database---------------------
var db = require('./db.js');
var port = process.env.PORT || 3000;
mongoose.connect(db.database, { useNewUrlParser: true });


if (environment !== 'production') {
  app.use(logger('dev'));
}


//------Routes-------------------------------------------
const additem=require('./routes/additem');

app.use('/todo',additem);

app.listen('1500', () => {
  console.log('Server now listening at localhost 1500');
});


module.exports = app;