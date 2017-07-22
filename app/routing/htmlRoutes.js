// DEPENDENCIES 
const path = require('path');

// ROUTING

module.exports = function(app) {
    // Start route handling

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    app.use(function(req, res){
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
};