var request = require("request"),
    fs = require('fs'),
    ph = require('phantom')

var url = "http://schedule.wayoutwest.se/artists.php"

exports.landing = function(req, res) {
  readPage(url, function(result){
    console.log("Page read.")
    var schedule = JSON.parse(result)
    result = JSON.stringify(schedule['posts'])
    // var text = "\n"

    // for(var i = 0; i < schedule['posts'].length; i++)
    // {
    //   console.log(i)
    //   // for (var key in schedule['posts'][i])
    //   // {
    //   // if(key == "title")
    //   text += schedule['posts'][i]['title'] + "<br><br>"
    //   // }
    // }

    fs.writeFile("/home/daniel/Documents/web/hairy-ironman/public/schedule.json", result);

    res.render('page.html')

  })
}

function readPage(url, callback) {
  ph.create(function(ph) {
    ph.createPage(function(page) {
      page.open(url, function(status) {
        page.evaluate(function() {
          return document.getElementsByTagName('pre')[0].innerHTML;
        }, function(result) {
          ph.exit();
          callback(result);
        });
      });
    });
  },
  {
    dnodeOpts: {
      weak: false
    }
  });
}
