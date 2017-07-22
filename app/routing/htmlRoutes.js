// DEPENDENCIES 
const path = require('path');

// ROUTING

module.exports = function (app) {
    // Start route handling

    // GET request for survey html
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    // USE default html for unrecognized routes
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
};