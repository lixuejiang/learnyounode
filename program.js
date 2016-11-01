var dirext = require('./dirext');

dirext(process.argv[2],process.argv[3],function(err,list){
	if(err){
		console.log(err);
		return;
	}
	list.map(function(item,index){
		console.log(item);
	});
});