// 导入http模块
var http = require("http");
// 开启一个监听事件,每次http请求都会触发这个事件
http.createServer(function(req, res){
	// 把编码设置为utf-8
	res.write('<head><meta charset="utf-8"></head>')
	// 相应信息
	res.write('asdasda');
	// 结束事件
	res.end()
}).listen(3000);