console.log("HTML Check");

var path = require('path');

function htmlRoutes(app) {

  // to survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  // to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

}

module.exports = htmlRoutes;