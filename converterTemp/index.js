var express = require('express');
var app = express();

app.get('/fahrenheit:value', function (req, res) {
    let centigradi = (req.params.value - 32) / 1.8;
        res.status(201).json({fahrenheit: req.params.value, centigradi});
        return centigradi;
})

app.get('/centigradi:value', function (req, res) {
    let fahrenheit = (req.params.value * 9/5 ) + 32;
        res.status(201).json({centigradi: req.params.value , fahrenheit});
        return fahrenheit;
})

exports.converterc = function(fahrenheit) {
    let centigradi = (fahrenheit - 32) / 1.8;
    console.log("centigradi:" , centigradi);
    return fahrenheit;
}

exports.converterf = function (centigradi) {
    let fahrenheit = (centigradi * 9/5 ) + 32;
    console.log("fahrenheit:" , fahrenheit);
    return fahrenheit;
}

app.listen(3006);