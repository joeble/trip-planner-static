const Sequelize = require('sequelize');
const db = require('./db');

// Hotel: name, num_stars. amenities
const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  amenities: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Hotel;
