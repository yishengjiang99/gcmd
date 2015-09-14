var f={};
f.google=function(query,cb){
	query = encodeURIComponent(query);
	$.getJSON("https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q="+query+"&callback=?",function(ret){
		cb(ret);
	});
}
