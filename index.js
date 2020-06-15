const express = require('express');

const app = express();

const logMiddleware = (req, res, next) => {
    console.log(`HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`);

    req.appName = 'GoNode';

    return next();
}


app.get("/", logMiddleware, (req, res) => {
    return res.send(`Bem-vindo, ${req.query.name}, ${req.appName}`);
});

app.get("/nome/:name", (req, res) => {
    return res.json({
        message: `Bem-vindo, ${req.params.name}`
    });
});

app.listen(3000);