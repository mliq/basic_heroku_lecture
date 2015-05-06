var express = require('express');
var app = express();

app.set('port', (process.env.PORT) || 5000);

app.get('/', function(req, res){
    res.send("What up Beta?");
});

app.listen(app.get('port'), function(){
    console.log('node app running on port:', app.get('port'));
});