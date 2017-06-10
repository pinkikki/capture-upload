const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(bodyParser.json({limit: '50mb'}));

app.get('/', function (req, res) {
    res.render("index", { title: 'capture-upload' });
});

app.post('/upload', function (req, res) {
    // var capture = req.body.capture;
    var decode = Buffer.from(req.body.capture.split("base64,")[1],'base64');
    fs.writeFile('output/camera-capture.png', decode, function(err) {
        console.log(err);
    });
    res.render("index", { title: 'capture-upload' });
});

app.listen(3000, function () {
    console.log('capture-upload app listening on port 3000!')
});