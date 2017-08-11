const express = require('express');
const router = express.Router();

const db = require('../models');
const Place = require('../models/place');
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');


// const restaurantRouter = require('./restaurants');
// const hotelsRouter = require('./hotels');
// const activitiesRouter = require('./activities');

router.get('/', function(req, res, next) {
    var outerScopeContainer = {};
    Hotel.findAll()
        .then(function(dbHotels) {
            outerScopeContainer.dbHotels = dbHotels;
            return Restaurant.findAll();
        })
        .then(function(dbRestaurants) {
            outerScopeContainer.dbRestaurants = dbRestaurants;
            return Activity.findAll();
        })
        .then(function(dbActivities) {
            res.render('home', {
                templateHotels: outerScopeContainer.dbHotels,
                templateRestaurants: outerScopeContainer.dbRestaurants,
                templateActivities: dbActivities
            });
        })
        .catch(next);

})


module.exports = router;
