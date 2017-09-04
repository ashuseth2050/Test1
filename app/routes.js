var insuranceHandler = require('./handlers/insurance-handler');
var commonHandler = require('./handlers/common-handler');

module.exports = function(app) {

	// insurance endpoints
    app.get('/api/getInsurance/:policyNumber', insuranceHandler.getInsurance);
    app.post('/api/addInsurance', insuranceHandler.addInsurance);
    app.get('/api/getQuotes', insuranceHandler.getQuotes);
    app.post('/api/renewInsurance', insuranceHandler.renewInsurance);

    // common endpoints
    app.get('/api/common/getCarModels', commonHandler.getCarModels);
    app.get('/api/common/getFuelType', commonHandler.getFuelType);
    app.get('/api/common/getRegStateCodes', commonHandler.getRegStateCodes);

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};