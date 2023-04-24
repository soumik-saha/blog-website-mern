const express = require("express");

const app = express();

app.get('/test', (req, res) => {
    res.send("testing ok2");
});

app.listen(4000);