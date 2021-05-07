const express = require('express');
const app = express();
const dealRoute = express.Router();

let dealModel = require('../model/Deal');

// Add Song
dealRoute.route('/create-deal').post((req, res, next) => {
    dealModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all songs
dealRoute.route('/').get((req, res) => {
    dealModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single song
dealRoute.route('/get-deal/:id').get((req, res) => {
    dealModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update song
dealRoute.route('/update-deal/:id').put((req, res, next) => {
    dealModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Deal successfully updated!')
        }
    })
})

// Delete song
dealRoute.route('/delete-deal/:id').delete((req, res, next) => {
    dealModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = dealRoute;