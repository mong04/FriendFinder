// Dependency
const friends = require('../data/friends');

// API Routing
module.exports = function(app) {

    // GET request for friends
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // POST survey data and find matches
    app.post('/api/friends', function(req, res) {
        
    })
}