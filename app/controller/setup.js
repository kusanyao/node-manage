



var MenuModel = require('../model/menu.js');

// 系统设置索引页面
module.exports.index = function(req, res){
    res.render('setup/index');
}

// 菜单列表页面
module.exports.getMenuList = function(req, res){
    MenuModel.findAll().then(function(list){
        res.render('setup/menu',{
            list:list
        });
    });
}

// 菜单编辑页面
module.exports.getMenuEdit = function(req, res){
    res.render('setup/menu_edit');
}

// 菜单编辑提交
module.exports.postMenuEdit = function(req, res){
    
}