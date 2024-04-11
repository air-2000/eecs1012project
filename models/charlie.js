const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const charlieSchema = new Schema({
    movId: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    }
}, {timestamps: true});

//Create model based on Schema
const charlie = mongoose.model('charlie', charlieSchema)

module.exports = charlie;
