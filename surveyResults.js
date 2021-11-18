function surveyResults() {
	//alert("test");
	let choice = [];
	let title1 = "Bereavement/Grief:\n\n";
	title1 = title1.fontsize(5);
	
	let title2 = "Anxiety around Covid-19 itself:\n\n";
	title2 = title2.fontsize(5);
	
	let title3 = "Isolation:\n\n";
	title3 = title3.fontsize(5);
	
	let selected = document.getElementById("survey").getElementsByTagName("INPUT");
	
	for(var x = 0; x < selected.length; x++) {
		if(selected[x].checked == true) {
			choice[x] = selected[x].value;
			//alert(x + " " + selected[x].value + " " + choice[x]);
		}
		
	}
	
	if(document.getElementById("other").value != "") {
		let title4 = document.getElementById("other").value;
		title4 = title4.fontsize(5);
		document.write(title4 + ":<br>");
		document.write("That is a very valid concern. Here are some general tips that might improve the current condition of your mental health, or maybe even solve your specified problem.<br>");
		document.write("1. Understand that there are variables in the world outside of your control.<br>2. Try going through the day with a goal in mind.<br>3. Establish a daily routine to keep you motivated.<br>4. Stay present and in the moment. Try not to dwell on the past or worry about the future.<br><br>");
	}
	if(choice[0] == 1) {
		document.write(title1);
		document.write("<br>Bereavement/Grief is a natural response to loss, especially during the Covid-19 Pandemic. Here are some tips to help you deal with your troubles.<br>");
		document.write("1. Acknowledge your grief<br>2. Understand that your feelings are normal<br>3. Try seeking grief counselling<br>4. Share your feelings with someone you trust<br> 5. Engage in activities that bring you joy<br><br>");
		
	}
	if(choice[1] == 2) {
		document.write(title2);
		document.write("<br>With so much news about the pandemic, anxiety around Covid-19 can be normal. Here are some tips to help deal with this stress:<br>");
		document.write("1. Trust in science: know that following protocols such as wearing a mask, keeping 6 feet apart from others, and washing hands regularly can help prevent the spread of Covid-19. If you feel symptoms of Covid-19, get tested.<br>2. Take a break from social media: social media can be full of misleading information or exaggerated headlines, so avoiding it may reduce Covid-19 related stress.<br>3. Avoid checking Covid-19 related news. While it is good to stay informed, do not become obsessive.<br><br>");
		
	}
	if(choice[2] == 3) {
		document.write(title3);
		document.write("<br>It is very normal to feel isolated during this time of social distancing. So, here are some tips to help feel less alone.<br>");
		document.write("1. Applications such as Facetime, Zoom, or simple text messaging can be a great way to connect with people in this digital age.<br>2. If possible or if you are comfortable with it, organize a small gathering with a friend or family member.<br>3. Try to connect with someone on CALM's 'Share Your Story' tab.<br><br>");
		
	}
	
	document.write("Thank you for taking the time to do the Mental Health Survey. If you want to connect with people going through similar struggles, try sharing your story in the 'Share Your Story' tab.<br>")
	document.write("<br>");
	let btn = document.createElement("button");
		btn.innerHTML = "Go Back";
		btn.onclick = function () {
		  window.history.go();
		};
	document.body.appendChild(btn);	
 
}