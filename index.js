const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', {
   autoescape: true,
   express: app,
   watch: true 
});

app.set('view engine', 'njk');

app.get("/", (req, res) => {
    return res.render('list', { name: "Rai" });
});

app.listen(3000);