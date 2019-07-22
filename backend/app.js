const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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
    
    const post = req.body;
    console.log(post);
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