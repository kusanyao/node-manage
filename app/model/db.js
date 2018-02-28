var Sequelize = require('sequelize');
// var Config    = require('../config.json');

var sequelize = new Sequelize('manage', 'kusanyao', 'kusanyao',{
	host     : '127.0.0.1',//Config.host,
	port     : '3306',//Config.port,
	dialect  : 'mysql',
	timezone : '+08:00' // timezone 设置时区为东8区
});

module.exports = sequelize;
