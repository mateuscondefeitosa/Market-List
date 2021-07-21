const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGOOSE CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("OH NO, MONGOOSE NOT OPEN, ERRORRRRRR!!");
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('AUAU!');
})

app.listen(3000, () => {
    console.log('app is listening!!!');
})