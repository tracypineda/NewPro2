var Sequelize = require('sequelize');

var sequelize = new Sequelize("sequelize_barter_db", 'root', '', {
  host: '127.0.0.1',
  dialect: "mysql"
});

module.exports = sequelize;
global.sequelize = sequelize;