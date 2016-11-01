var net = require('net'),
	strftime = require('strftime'),
	port = process.argv[2];

var server = net.createServer(function(socket) {
	var str = strftime('%F %H:%M');
	str = str + '\n';
	socket.write(str);
	socket.end();
})  
server.listen(port);