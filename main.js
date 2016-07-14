var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('combined'));

app.use('/', express.static('client/templates'));
app.use('/bower_components', express.static('bower_components'));
app.use('/javascripts', express.static('client/javascripts'));

// Do stuff for different model/api thingy.
// ['api-token', 'issue', 'transition'].forEach(function (name) { require(name).register(); });

['./server/controllers/users'].forEach(function(name) {
  require(name).register(app);
});

app.listen(3000);
