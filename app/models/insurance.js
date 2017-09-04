var mongoose = require('mongoose');

// define inusrance model
module.exports = mongoose.model('insurance', {
    policyNumber:{
        type: String,
        required: true
    },
	purchaseDate: {
		type: String,
		trim: true,
		required:true
	},
    userName : {
        type : String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    phoneNumber : {
        type : Number,
        required: true,
        min: 1000000000,
        max: 9999999999
    },
    carType : {
        type : String,
        trim: true,
        required: true
    },
    fuelType : {
        type : String,
        trim: true,
        required: true
    },
    registrationState : {
        type : String,
        trim: true,
        required: true
    },
	plan: {
        name: {
            type : String,
            trim: true,
            required: true
        },
        price: {
            type : Number,
            required: true
        }
    }
});
