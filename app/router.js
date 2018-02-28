// 路由
var Index   = require('./controller/index.js');
var Manager = require('./controller/manager.js');
var Setup   = require('./controller/setup.js');

var MenuModel = require('./model/menu.js');

// 检查是否登陆
var authChecker = function(req, res, next) {
    // 已登录访问登录页面跳转到首页
    if(req.session.user && req.path == '/login'){
        res.redirect("/");
    }
    // 未登录访问非登录页面跳转到登录页面
    else if(!req.session.user && req.path != '/login') {
        res.redirect("/login");
    }
    // 继续执行下一步
    else{
        res.locals.session = req.session;
        next();
    }
}

// 检查是否有权限访问
var powerChecker = function(req, res, next){
    next();
}

// 顶部菜单
var topMenu = function(req, res, next){
    MenuModel.findTopMenu(function(topMenu){
        res.locals.topMenu = topMenu;
        next();
    });    
}

var Router = function(app){
    // app.use(authChecker, powerChecker);
    app.use(topMenu);
    app.get('/',       Index); // 管理后台首页
    app.get('/login',  Manager.getLogin);
    app.post('/login', Manager.postLogin);
    app.get('/logout', Manager.logout);

    app.get('/setup',  Setup.index);

    app.get('/menu/list',  Setup.getMenuList);
    app.get('/menu/edit',  Setup.getMenuEdit);
    app.post('/menu/edit', Setup.postMenuEdit);

    // 没有匹配的路由统一跳转到首页
    app.use(function(req, res){
        res.render('404');
    });
}

module.exports = Router;