const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);

const Post = require('./models/post');


const app = express();

mongoose.connect("mongodb+srv://user:<password>@cluster0-isiev.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to Database....");
}).catch(() => {
    console.log("Connection failed...");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((rep, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", 
    "Origin, X-Requested-with, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", 
    "GET, POST, PATCH, DELETE, OPTIONS")
    next();
});

app.post('/api/posts', (req, res, next) => {
    
    const post = new Post({
        title:  req.body.title,
        content: req.body.content
    });
    console.log(post);
    post.save();
    res.status(201).json({
        message: 'Post added sucessfully'
    });  
});

app.get('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: 'f223eedddccdeefkkk23',
            title: 'First server-side post',
            content: 'this is coming from the server'
        },
        {
            id: 'feferferfsvvfkfvf003',
            title: 'Second server-side post',
            content: 'this is coming from the server!'
        }
    ];
    res.status(200).json({
        message: 'Post fetched successfully',
        posts: posts
    });
});

module.exports = app;