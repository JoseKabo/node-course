require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
// static content
app.use(express.static('public/home'));

app.get('/generic', (req, res) => {
    res.render('elements', {
        name: 'JoKaMexD',
        title: 'Node course with handlebars'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'JoKaMexD',
        title: 'Node course with handlebars'
    });
});

app.get('/', (req, res) => {
    res.render('home', {
        name: 'JoKaMexD',
        title: 'Node course with handlebars'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log('lISTENING APP IN ', port);
});