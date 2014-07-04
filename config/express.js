var express = require('express')

module.exports = function(app) {
  app.use(express.static("/home/daniel/Documents/web/hairy-ironman/public"))

  app.engine('html', require('ejs').renderFile);
  app.set("view options", {layout: false});
  app.set('views', '/home/daniel/Documents/web/hairy-ironman/app/views/')

}
