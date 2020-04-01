var express = require('express');
var app = express();
var mymodule = require('morra');

app.get('/:value', function (req, res) {
    var choice = req.params.value;
    console.log(mymodule.morra(choice));
    res.status(201).json(mymodule.morra(choice));
});
app.listen(3006);