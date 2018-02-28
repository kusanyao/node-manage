var Db = require('./db');
var Sequelize = require('sequelize');

var Manager = Db.define('manager',{
    id:{
        filed      : 'id',
        primaryKey : true,
        type       : Sequelize.BIGINT,
        allowNull  : false
    },
    username: {  
        field     : 'username',
        type      : Sequelize.CHAR,
        allowNull : false
    },  
    password: {  
        field     : 'password',
        type      : Sequelize.CHAR,
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
    tableName       : 'nm_manager',
    timestamps      : false,
    freezeTableName : true
});

// 获取用户
Manager.findByUname = function(username, cb){
    Manager.find({where:{username:username}}).then(function(manager){
        console.log(manager);
        console.log(manager.id, manager.username);
        cb(false, manager);
    }).catch(function(error){
        cb({error:'error'}, error);
    });
}

// 登录
Manager.login = function(username, password, cb){
    Manager.findByUname(username, function(err, manager){
        if(err){
            cb(isOk);
        }else{
            var isOk = (manager.password == password);
            cb(isOk);
        }        
    });
}

module.exports = Manager;