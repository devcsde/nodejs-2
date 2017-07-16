/**
 * Created by csche on 14.07.2017.
 */
const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get ('/users', (req, res) => {
    res.send([
        {
            name: 'Simon',
            age: 21
        },
        {
            name: 'Paul',
            age: 50
        },
        {
            name: 'Chris',
            age: 41
        }
    ]);

});

app.listen(3000);

module.exports.app = app;