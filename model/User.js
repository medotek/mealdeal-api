const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    nickname: {
        type: String
    },
    uid: {
        type: String
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', User)