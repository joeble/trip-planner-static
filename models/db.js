const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false});

// THIS IS SHIT
// WE NEED IT TO NOT BE CIRCULAR
// GOOD BYE FOR NOW...

module.exports = db;
