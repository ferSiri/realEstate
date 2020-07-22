const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
        console.log('listening at ' + PORT);
    });


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'front')));

app.get('/*', function (req, res) {
    res.sendFile(path.resolve('./front/index.html'));
});


