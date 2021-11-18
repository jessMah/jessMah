function checkIn(){
	questions = ['Have you been getting quality sleep with regular bedtimes?','Recently, have you had more worries or anxiety than usual?','Do you feel that your life is appropriately balanced between work, fun, friends, family, self-care, exercise, and other meaningful pursuits?', 'Have your eating habits changed in any way recently?', 'In the past week you ever experienced an ‘attack’ or sudden onset of fear, anxiety, or panic?'
		]
		
		let choice = [];
		let mentalState = 0;
		let rand = Math.floor(Math.random()*3)+1;
		
		//
		 for(x = 0; x < questions.length; x++) {
    		choice.push(window.prompt(questions[x] + '\nYes or No (Enter Y for yes, or N for no): '));
		 }
		 
		 
		 //calculate users mental wellbeing on a scale of 0-5
		 if(choice[0] == 'N'){
		 	mentalState++;
		 }
		 if(choice[1] == 'Y'){
		 	mentalState++;
		 }
		 if(choice[2] == 'N'){
		 	mentalState++;
		 }
		 if(choice[3] == 'Y'){
		 	mentalState++;
		 }
		 if(choice[4] == 'Y'){
		 	mentalState++;
		 }
		 
		 //different messages depending on users wellbeing ranking 
		 if(mentalState <= 1 && rand == 1){
		 	document.write("It seems like you've been doing quite well recently! Keep it up by eating healthy food with lots of nutrients to help supplement a healthy brain.");
		 }
		 if (mentalState <= 1 && rand == 2){
		 	document.write("Leisure time is a necessity for emotional and mental health. Even when your emotional state is stable, it can still be a good idea to try to take some time to relax! Contemplate and pay attention to all the positive things as you go about your day — even the small things.")
		 }
		 if (mentalState <= 1 && rand == 3){
		 	document.write("Try listening to your favourite song, reading your favourite book, or going outside to do some activities you enjoy!");
		 }
		 if(mentalState >= 2 && mentalState <= 3 && rand == 1){
		 	document.write("Count your blessings or contemplate what you are grateful for. Taking a step back and acknowledging what you are thankful for can be an effective mental health strategy.");
		 }
		 if(mentalState >= 2 && mentalState <= 3 && rand == 2){
		 	document.write("It can be helpful to repeat a positive quote to yourself. Repeated positive affirmations can strengthen your optimism. Whether it be a personal mantra, prayer, or quotation, daily reassurances can help you look on the bright side!");
		 }
		 if(mentalState >= 2 && mentalState <= 3 && rand == 3){
		 	document.write("Staying active is as good for the brain as it is for the body! Try to go for a walk or do a short exercise. After all, regular activity can have a major impact on your mental and emotional health, relieve stress, improve memory, and help you sleep better.");
		 }
		 if(mentalState >= 4 && rand == 1){
		 	document.write("Try to engage with a friendly face. Face-to-face social interaction with someone who cares for you is one of the most effective ways to calm your nervous system and relieve some stress.");
		 }
		 if(mentalState >= 4 && rand == 2){
		 	document.write("Yoga, mindfulness, meditation, and deep breathing can work to help reduce overall levels of stress and anxiety. Try taking some deep breaths and setting aside a few minutes for mindfulness!");
		 }
		 if(mentalState >= 4 && rand == 3){
		 	document.write("Take a break from technology or social media. Doing this can help you stay centered and down-to-earth. Social media can easily make us flustered or anxious, especially since access to current events is so fast and spontaneous. Therefore, it's a good idea to take a break from time-to-time to let your brain relax for a bit.");
		 }
		 if(mentalState >= 4){
		 	document.write("<br><br>" + "It seems like you've been struggling recently. Please remember that you are NOT alone and that there are people you can reach out to for help! For further support, please contact:" + " https://kidshelpphone.ca/" + "or call 833-456-4566 & (403) 476-0385") 
		 }
		 
		 
		 //Go back to previous page
		document.write("<br><br>" + "To go back to the previous page, click the button below: " + "<br>")
		let btn = document.createElement("button");
		btn.innerHTML = "Go back";
		btn.onclick = function () {
		  window.history.go();
		};
	document.body.appendChild(btn);
}