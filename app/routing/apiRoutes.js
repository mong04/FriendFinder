// Dependency
const friends = require('../data/friends');
const path = require('path');

// API Routing
module.exports = function(app) {

    // GET request for friends
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // POST survey data and find matches
    app.post('/api/friends', function(req, res) {
        
        let bestMatch = {
            name: '',
            photo: '',
            matchDiff: 500
        }

        let userData = req.body;

        for (value of friends){
            // console.log(value.name);
            let matchVal = 0;

            for (let j = 0; j < 10; j++){
                console.log(value.scores[j]);
                matchVal += Math.abs(parseInt(userData.scores[j]) 
                - parseInt(value.scores[j]));

                if (matchVal <= bestMatch.matchDiff) {
                    bestMatch.name = value.name;
                    bestMatch.photo = value.photo;
                    bestMatch.matchDiff = matchVal;
                }
            }
        }

        friends.push(userData);

        res.json(bestMatch);
    })
}