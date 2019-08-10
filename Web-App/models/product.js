var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    symbol: {type: String, required: true},
    boughtbyAO: {type: Number, required: true},
    seed: {type: Number, required: true},
    city: {type: String}
});

module.exports = mongoose.model('Product', schema);
