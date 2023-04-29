const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
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

app.listen(4000);

// blog (username)
// m5cMeQcnBGxR88NM (password)

// mongodb+srv://blog:m5cMeQcnBGxR88NM@cluster0.cvrmc86.mongodb.net/?retryWrites=true&w=majority  
// (connection string)