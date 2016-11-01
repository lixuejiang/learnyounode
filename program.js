var fs = require('fs'),
	filename = process.argv[2];
var buffer = fs.readFileSync(filename).toString().split('\n');

if(buffer.length > 0){
	console.log(buffer.length -1);
}else{
	console.log(buffer.length);
}
