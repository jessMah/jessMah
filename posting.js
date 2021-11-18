function post(){
	let date = document.getElementById("date").value;
	let posting = document.getElementById("posting").value;
	
	document.body.insertAdjacentHTML("beforeend",
		"<h4 style = 'text-align:center;'>" + date + "<h4/>");
		
	document.body.insertAdjacentHTML("beforeend",
		"<p style = 'text-align:center;'>" + posting + "<p/><br>");

}