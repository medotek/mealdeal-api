const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Deal = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    productSku: {
        type: String
    } ,
    price: {
        type: Number
    },
    dateCreation: {
        type: Date
    },
    expired: {
        type: Boolean
    },
    storeId: {
        type: String
    } ,
    vote: {
        type: Number
    },
    description: {
        type: String
    },
    oldPrice: {
        type: Number
    },
    salePercent: {
        type: Number
    },
    imageId: {
        type: String
    } ,
}, {
    collection: 'deals'
})

module.exports = mongoose.model('Deal', Deal)