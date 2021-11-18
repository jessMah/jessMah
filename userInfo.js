function getName(){
	
  document.getElementById("demo").innerHTML = document.getElementById("name").value;
}
function intro() {
	document.getElementById("demo").innerHTML = "Thank you for creating an account, " + document.getElementById("name").value + ". Please navigate the tabs above and take the Mental Health Survey!";
}