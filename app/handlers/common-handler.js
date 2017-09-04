const carModel = require("../config/car-model");
const carFuelType = require("../config/car-fuel-type");
const regStateCodes = require("../config/registration-state-code");

function getCarModels (req, res) {
     
     if(carModel && Array.isArray(carModel)){

        if(carModel.length > 0){
            
            var carManfNameAndModelName = [];
            
            carModel.forEach(function(carObj){
                carObj.models.forEach(function(modelName) {
                    carManfNameAndModelName.push(carObj.manufacturer + "-" +  modelName)
                });
                return carManfNameAndModelName
            });
                res.json({status: "success", data: carManfNameAndModelName});
        }
        else {
                res.json({status:"info", message:"no data found"});
        }

     }
     else{
         res.json({status:"failure", message:"could not read the car model data"});
     }
     
}

function getFuelType (req, res) {
     
     if(carFuelType && Array.isArray(carFuelType)){

        if(carFuelType.length > 0){
            res.json({status: "success", data: carFuelType});
        }
        else {
            res.json({status:"info", message:"no data found"});
        }
     }
     
     else{
         res.json({status:"failure", message:"could not read the fuel type"});
     }
}

function getRegStateCodes (req, res) {
     
     if(regStateCodes && Array.isArray(regStateCodes)){

        if(regStateCodes.length > 0){
            var regStateNames = regStateCodes.map(function(obj){
                return obj.stateName;
            });
            res.json({status: "success", data: regStateNames});
        }
        else {
            res.json({status:"info", message:"no data found"});
        }
     }
     
     else{
         res.json({status:"failure", message:"could not read the registration code"});
     }
}

exports.getCarModels = getCarModels;
exports.getFuelType = getFuelType;
exports.getRegStateCodes = getRegStateCodes;
