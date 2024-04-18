const express = require('express')
const app = express()
const propmt = require('prompt-sync')();
const path = require('path');
app.set('view engine', 'ejs')
const port = 3000;

const about = require('./thedata');

app.use((req, res, next) => {
    console.log("Request Made")
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

var weather = require('weather-js');

app.set('views', path.join(__dirname, 'views')); // Set the views directory


app.get('/', (req, res) => {
    res.sendFile('./views/main.html', {root:__dirname })
});

app.get('/davao', (req, res) => {
    weather.find({search: 'Davao, Philippines', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weatherdavao: eval(JSON.stringify(result, null, 2))
            }
            res.render('davao', data)
        }
    });
});

app.get('/australia', (req, res) => {
    weather.find({search: 'Australia', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weatheraustralia: eval(JSON.stringify(result, null, 2))
            }
            res.render('australia', data)
        }
    });
});

app.get('/uae', (req, res) => {
    weather.find({search: 'uae', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weatheruae: eval(JSON.stringify(result, null, 2))
            }
            res.render('uae', data)
        }
    });
});

app.get('/france', (req, res) => {
    weather.find({search: 'Europe', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weatherfrance: eval(JSON.stringify(result, null, 2))
            }
            res.render('france', data)
        }
    });
});

app.get('/southafrica', (req, res) => {
    weather.find({search: 'SouthAfrica', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weathersouthafrica: eval(JSON.stringify(result, null, 2))
            }
            res.render('southafrica', data)
        }
    });
});

app.get('/main', (req, res) =>   {
    res.render('main', { main });
});

app.get('/about', (req, res) => {
    res.render('about', { about });
});


app.get('/portfolio', (req, res) => {
    res.render('portfolio', { name: 'Harlyn', para: 'paragraph' });
});

app.get('/uniquepage', (req, res) => {
    res.render('uniquepage', { uniquepage });
});

app.get('/sports', (req, res) => {
    res.render('sports', { sports });
});

app.get('/travel', (req, res) => {
    res.render('travel', { travel });
});

app.get('/leo', (req, res) => {
    res.render('leo', { leo });
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});