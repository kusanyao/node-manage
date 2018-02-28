var Db = require('./db');
var Sequelize = require('sequelize');

var Menu = Db.define('menu',{
    id:{
        filed      : 'id',
        primaryKey : true,
        type       : Sequelize.BIGINT,
        allowNull  : false
    },
    type: {  
        field     : 'type',
        type      : Sequelize.BIGINT,
        allowNull : false
    },
    menu: {  
        field     : 'menu',
        type      : Sequelize.STRING,
        allowNull : false
    },
    routerId: {  
        field     : 'router_id',
        type      : Sequelize.BIGINT,
        allowNull : false
    },
    createdAt: {  
        field     : 'created_at',
        type      : Sequelize.BIGINT,
        allowNull : false
    },
    modifiedAt: {  
        field     : 'modified_at',
        type      : Sequelize.BIGINT,
        allowNull : false
    }
},{
    tableName       : 'nm_menu',
    timestamps      : false,
    freezeTableName : true
});

Menu.findTopMenu = function(cb){
    Menu.findAll({where:{type:1}}).then(function(topMenu){
        cb(topMenu);
    });
}

module.exports = Menu;