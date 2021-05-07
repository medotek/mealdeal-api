const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Deal = new Schema({
    deal_title: {
        type: String
    },
    author: {
        type: String
    }
}, {
    collection: 'deals'
})

module.exports = mongoose.model('Deal', Deal)