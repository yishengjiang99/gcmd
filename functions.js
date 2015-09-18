var f={};

f.google=function(query,cb,prog){
	query = encodeURIComponent(query);
	if(prog && typeof prog === "function") prog();
	$.getJSON("https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q="+query+"&callback=?",function(ret){
		if(ret.responseData.results){
			var data = [];
			$(ret.responseData.results).each(function(i,e){
				data.push(e.url);
			});
			cb(data);
		}
	});
}

f.weather=function(zipcode,cb){

}
