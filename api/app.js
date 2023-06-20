var path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const User = require('./Models/Users');
const db = require('./config/db');

//Connect to db
db.connect();

// const handlebars = require("express-handlebars").engine;
const app = express();
const port = 8000;
/* MIDDLEWARE */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan('combined'));

// app.set('view engine', 'hbs');
// app.set('views', './views');
// app.set('views', path.join(__dirname, 'resources', 'views'));
//route
const routes = require('./routers');

routes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
