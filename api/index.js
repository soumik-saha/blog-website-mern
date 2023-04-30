const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const jwt  = require("jsonwebtoken");

const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = 'uig43uyy78&*y89yrhiuhdsi99894jo';

app.use(cors({credentials: true, origin: true}));
app.use(express.json());

mongoose.connect('mongodb+srv://blog:m5cMeQcnBGxR88NM@cluster0.cvrmc86.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {    
        const userDoc = await User.create({ 
            username, 
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if(passOk) {
        // Logged in
        jwt.sign({username,  id:userDoc._id}, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok');
        });
    }
    else {
        res.status(400).json("wrong credentials");
    }
});

app.listen(4000);

// blog (username)
// m5cMeQcnBGxR88NM (password)

// mongodb+srv://blog:m5cMeQcnBGxR88NM@cluster0.cvrmc86.mongodb.net/?retryWrites=true&w=majority  
// (connection string)