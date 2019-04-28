console.log("API Check");

var friends = require("../data/friends.js")

module.exports = function(app){
    app.get('/api/friends', function(req,res){
      res.json(friends);
    });
  
    app.post('/api/friends', function(req,res){
      var newFriendScores = req.body.scores;
      var scoresArray = [];
      var bestMatch = 0
      console.log(newFriendScores)

      // goes through firnds then goes through again to find their scores
      for(var i = 0; i < friends.length; i++){
        var scoreDifference = 0;
        for(var j = 0; j < newFriendScores.length; j++){
          scoreDifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
        }
        scoresArray.push(scoreDifference);
      }
  
      //after all friends are compared, find best match
      for(var i = 0; i < scoresArray.length; i++){
        if(scoresArray[i] <= scoresArray[bestMatch]){
          bestMatch = i;
        }
      }

      var newestFriend = friends[bestMatch];
      res.json(newestFriend);
      console.log(newestFriend)
  
      friends.push(req.body);
    });
  };
