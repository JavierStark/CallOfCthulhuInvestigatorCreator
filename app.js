const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function(req, res){
    res.render('characterCreation');
})

app.post('/', function(req, res){
    let characteristics = req.body;
});


app.listen('3000', function(err){
    console.log('Server started in port 3000');
});