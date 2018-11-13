document.writeln("	<nav class=\'navbar navbar-default navbar-inverse\' style=\'margin-bottom: 0px\'>");
document.writeln("	  	<div class=\'container-fluid\'>");
document.writeln("	    	<div class=\'navbar-header\'>");
document.writeln("	      		<a class=\'navbar-brand\' href=\'index.html\'>飞飞统计</a>");
document.writeln("	    	</div>");
document.writeln("	    	<p class=\'navbar-text pull-right\'></p>");
document.writeln("		</div>");
document.writeln("	</nav>");

function startRequest() {
    $(".navbar-text").text((new Date()).toLocaleDateString() + "   " + (new Date()).toLocaleTimeString()); 
}
startRequest()
setInterval("startRequest()", 1000);