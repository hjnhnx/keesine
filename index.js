const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const route = require('./route')
const app = express();
const path = require('path');
require('dotenv').config();

app.use(session({
    secret: 'demonodejsthesupersecretcode',
    resave: true,
    saveUninitialized: true
}));


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));


const db_uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@keesine.gf03izr.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(db_uri)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

app.use(route)

//
// app.get('/', (req, res) => {
//   res.render('index', { title: 'ExpressJS with EJS' });
// });


app.listen(process.env.PORT|4953);
