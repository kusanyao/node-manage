// 管理员控制器

var ManagerModel = require('../model/manager.js');

// 登录页面
module.exports.getLogin = function(req, res){
    res.render('login');
}

// 登录操作
module.exports.postLogin = function(req, res){
    ManagerModel.login(req.body.username, req.body.password, function(isOk){
        if(isOk){
            req.session.user = {id:1,username:'ksy'};
            res.json({
                code:1,
                result:'/',
                message:'登录成功'
            });
        }else{
            res.json({
                code:100,
                message:'用户名或密码不正确'
            });
        }
    });
}

// 退出登录
module.exports.logout = function(req, res){
    req.session.user = null;
    res.redirect("/");
}

// 获取当前登录信息
module.exports.getCurrUser = function(req, res){
    res.json({
        id       : req.session.user.id,
        username : req.session.user.username
    });
}