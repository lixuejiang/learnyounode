var http = require('http'),
	async = require('async'),
	bl = require('bl'),
	urls = process.argv.slice(2);

async.map(urls,function(url,callback){
	http.get(url,function(response){
		response.pipe(bl(function (err, data) {
			if(err){
				callback(err);
			}
			callback(null,data.toString());
		}))  
	});
},function(err,results){
	results.map(function(item,index){
		console.log(item);
	});
})