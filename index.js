const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

if (process.env.NODE_ENV === 'produnction') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.send({hi: 'hi'})
        //res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);