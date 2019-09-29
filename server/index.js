require('dotenv').config()

const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./controllers/authController')
const treasureCtrl = require('./controllers/treasureController') 
const auth = require('./middleware/authMiddleware')

const PORT = 4000
//env Variables
const {SESSION_SECRET, CONNECTION_STRING} = process.env;

const app = express();

// TLM  

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
    console.log('db connected');
});

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET
})
);

//DATABASE Connections

// endpoints

//Auth Endopoints
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)

//Treasure Endponts
app.get('/api/treasure/dragon', treasureCtrl.dragonTreasure)
app.get('/api/treasure/user',auth.usersOnly, treasureCtrl.getUserTreasure)

//listen

app.listen(PORT, console.log(`Server is running on port ${PORT}`))