var fs = require('fs'),
	path = require('path');

module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(err, list){
		if (err) {
			callback(err);
			return;
		};

		var result = list.filter(function(item, index){
			return path.extname(item) === '.' + ext;
		});
		callback(null,result);
	});
}