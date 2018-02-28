var Express = require('express');
var Session = require('express-session');
var Parser  = require("body-parser");
var Config  = require('./config.json');

var app = Express();

// 设置模版引擎和views目录
app.set('view engine', 'jade');
app.set('views',Config.views);


app.use(Session({
	secret: '12345',
	name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
	cookie: {maxAge: 8000000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
	resave: false,
	saveUninitialized: true,
}));
app.use(Express.static('public'));
app.use(Parser.urlencoded({ extended: false }));

require('./app/router.js')(app);

app.listen(Config.port);

console.log(Config.port);