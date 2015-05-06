var express = require('express');
var app = express();

var message = require('./betaGreeting');

app.set('port', (process.env.PORT) || 5000);

app.get('/', function(request, response){
    response.send(message());
});

app.listen(app.get('port'), function(){
    console.log('node app running on port:', app.get('port'));
});