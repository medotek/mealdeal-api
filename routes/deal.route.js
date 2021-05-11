const express = require('express');
const app = express();
const dealRoute = express.Router();

let dealModel = require('../model/Deal');

// Add deal
dealRoute.route('/create-deal').post((req, res, next) => {
    dealModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all deals
dealRoute.route('/').get((req, res) => {
    dealModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

dealRoute.route('/search-deal/:search').get((req, res, next) => {

    dealModel.find({title: { $regex:  req.params.search, $options: "i" }}, (error, data) => {
        if (error) {
            console.log(req.params.id)
            return next(error)
        } else {
            res.json(data)
        }
    });
});

// Get single deal
dealRoute.route('/get-deal/:id').get((req, res) => {
    dealModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update deal
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

// Delete deal
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

// Delete deal
dealRoute.route('/get-user-deals/:uid').get((req, res) => {
    dealModel.find({author: req.params.uid}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = dealRoute;