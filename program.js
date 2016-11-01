var http = require('http'),
	url_model = require('url'),
	port = process.argv[2];

var server = http.createServer(function (req, res) {
	var url = url_model.parse(req.url,true),
		date = new Date(url.query.iso),
		dateObj;


	// console.log(url.pathname);		
	res.writeHead(200, { 'Content-Type': 'application/json' });

	if(url.pathname === '/api/parsetime'){
		dateObj = {
			"hour": date.getHours(),  
	       	"minute": date.getMinutes(),  
	       	"second": date.getSeconds()
		};
	}else if(url.pathname === '/api/unixtime'){
		dateObj = {
			unixtime:date.getTime()
		}
	}
	// console.log(JSON.stringify(dateObj));
	res.end(JSON.stringify(dateObj));
})  
server.listen(port);
