const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);

const postsRouter = require("./routes/posts");



const app = express();

mongoose.connect("mongodb+srv://denis:<password>@cluster0-isiev.mongodb.net/node-angular?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to Database....");
    }).catch(() => {
        console.log("Connection failed...");
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((rep, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-with, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next();
});

app.use("/api/posts", postsRouter);

module.exports = app;