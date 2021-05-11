const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    nickname: {
        type: String
    },
    uid: {
        type: String
    },
    creationDate: {
        type: Date
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', User)