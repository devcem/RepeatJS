function repeat(selector, json){
	 var obj = $(selector);
	 var repeatObject = {
	 		id      : obj.attr("id"),
	 		data    : json,
	 		context : obj.html(),
	 		exec    : function(){
	 			obj.html("");
	 			for(i=0;i<json.length;i++){
	 				var data = json[i];
	 				var replace = this.context.match(/{{(.*?)}}/g);
	 				var output = this.context;
	 				for(a=0;a<replace.length;a++){
	 					var value = eval(replace[a]);
	 					output = output.replace(replace[a], value);
	 				}
	 				$( output ).insertBefore( obj );
	 					
	 			}
	 			$.each($("*[repeat-src]"), function(elem){
	 				$( this ).attr("src", $( this ).attr("repeat-src"));
	 			});
	 		}
	 	};

	repeatObject.exec();
}
