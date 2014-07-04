var pages = require('../app/controllers/pages.js')

var url = "http://schedule.wayoutwest.se/artists.php"

module.exports = function(app) {
  app.get("*", pages.landing)
  // app.get("/about", pages.about)
}
