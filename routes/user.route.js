const express = require('express');
const app = express();
const userRoute = express.Router();

let userModel = require('../model/User');

// Add user
userRoute.route('/create-user').post((req, res, next) => {
    userModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all users
userRoute.route('/').get((req, res) => {
    userModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single user
userRoute.route('/get-user/:uid').get((req, res) => {
    userModel.findOne(req.params.uid, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update user
userRoute.route('/update-user/:id').put((req, res, next) => {
    userModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('user successfully updated!')
        }
    })
})

// Delete user
userRoute.route('/delete-deal/:id').delete((req, res, next) => {
    userModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = userRoute;