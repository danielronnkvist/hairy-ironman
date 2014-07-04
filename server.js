var express = require('express')
var app = express()

require('./config/express.js')(app)

require('./config/routes.js')(app)

var server = app.listen(1337, function() {
  console.log("Listening on port %d", server.address().port);
});
