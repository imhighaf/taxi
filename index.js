const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
//const cors = require('cors');

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
//app.use(cors());

require('./routes/auth')(app);

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
