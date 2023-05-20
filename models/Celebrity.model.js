//  Add your code here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema({
    name: String,
    occupation: String, 
    catchPhrase: String,
    films: {type: mongoose.Types.ObjectId, ref: 'Movie'}
});

const Celebrity = mongoose.model('Celebrity', celebSchema);


module.exports = Celebrity;