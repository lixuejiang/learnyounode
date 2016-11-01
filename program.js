var http = require('http'),
	fs = require('fs'),
	map = require('through2-map'),
	port = process.argv[2];

var server = http.createServer(function (req, res) {  
	req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase();  
     })).pipe(res)  
})  
server.listen(port);