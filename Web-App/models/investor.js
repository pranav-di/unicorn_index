var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var investorSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    city: {type: String, required: true},
    portfolio:[String]
});

module.exports = mongoose.model('Investor', investorSchema);
