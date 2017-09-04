var insurance = require('../models/insurance');
var randomNumberGenerator = require('../utils/random-number-generator');
var insurancePlans = require('../config/insurance-plans');

function getInsurance (req, res) {
    var policyNumber = req.params.policyNumber || '';

    insurance.find({policyNumber: policyNumber}, {_id: 0, __v: 0}, function (error, data) {
        if(error) {
            console.log('Error while retrieving the insurance ddetails. ' + error);
            res.json({
                status: 'failure',
                message: 'Error while retrieving the insurance details. ' + error
            });
        } else if (data && data.length > 0){
            console.log('Insurance details are retrieved successfully');
            res.json({
                status: 'success',
                data: data[0]
            });
        } else {
            console.log('There is no record for the given policy number');
            res.json({
                status: 'info',
                message: 'There is no record for the given policy number'
            });
        }
    })
}

function addInsurance (req, res) {
    var newInsurance = new insurance({
        userName: req.body.userName,
        phoneNumber: req.body.phoneNumber,
        carType: req.body.carType,
        fuelType: req.body.fuelType,
        registrationState: req.body.registrationState,
		plan: req.body.plan
    });

    newInsurance.policyNumber = randomNumberGenerator.getRandomNumber(12);
	newInsurance.purchaseDate=new Date().toISOString().replace(/T/, ' '). replace(/\..+/, '');

	
    newInsurance.save(function (error) {
        if(error) {
            console.log('Error while the new insurance. ' + error);
            res.json({
                status: 'failure',
                message: 'Error while saving the new insurance. ' + error
            });
        } else {
            console.log('The new insurance is saved successfully');
            res.json({
                status: 'success',
                data: {
                    policyNumber: newInsurance.policyNumber
                }
            });
        }
    })
}

 function renewInsurance (req, res) {
    var policyNumber,
        purchaseDate;

    if (req.body.policyNumber && req.body.purchaseDate) {
        policyNumber = req.body.policyNumber || '';
        purchaseDate = req.body.purchaseDate;

        insurance.findOneAndUpdate({policyNumber: policyNumber}, {purchaseDate: purchaseDate}, 
            {new: true}, function (error, data) {
            if(error) {
                console.log('Error while renewing insurance. ' + error);
                res.json({
                    status: 'failure',
                    message: 'Error while renewing insurance. ' + error
                });
            } else if (data) {
                console.log('The insurance is renewed successfully');
                res.json({
                    status: 'success',
                    data: {
                        policyNumber: policyNumber
                    }
                });
            } else {
                console.log('Error while renewing insurance. The policyNumber is not available');
                res.json({
                    status: 'failure',
                    message: 'The policyNumber is not available'
                });
            }
        });
    } else {
        console.log('Error while renewing insurance. Check the request parameters');
        res.json({
            status: 'failure',
            message: 'Error while renewing insurance. Check the request parameters'
        });
    }
} 
       
function getQuotes (req, res) {
    if(insurancePlans && Array.isArray(insurancePlans)){

        if(insurancePlans.length > 0){
            res.json({status: "success", data: insurancePlans});
        }
        else {
            res.json({status:"info", message:"no data found"});
        }
     }
     
     else{
         res.json({status:"failure", message:"could not read the insurance plans"});
     }
}

exports.getInsurance = getInsurance;
exports.addInsurance = addInsurance;
exports.renewInsurance = renewInsurance;
exports.getQuotes = getQuotes;
