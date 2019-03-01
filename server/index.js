require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller')
const session = require('express-session')

const app = express(),
    { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => console.log(`Port ${SERVER_PORT} is listening`))
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 100000000000}
}))

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)