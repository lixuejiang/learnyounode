var http = require('http'),
	fs = require('fs'),
	port = process.argv[2],
	filename = process.argv[3];

var server = http.createServer(function (req, res) {  
	var src = fs.createReadStream(filename);
	src.pipe(res);
})  
server.listen(port);