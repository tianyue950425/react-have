const proxy = require('http-proxy-middleware');
module.exports = function(app){
	app.use(proxy('/api2',{
		target:'https://api-v5.myhaowu.com/wanyi',
		host:"api-v5.myhaowu.com",
		changeOrigin:true
	}))
}