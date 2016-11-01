var fs = require('fs'),
	path = require('path'),
	dir = process.argv[2],
	ext = process.argv[3];

fs.readdir(dir, function(err, list){
	if (err) {
		throw err;
	};

	list.filter(function(item, index){
		if(path.extname(item) === '.' + ext){
			console.log(item);
		}
	});
});