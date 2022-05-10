	var circlesize = 100;
	var counter1 = 0;
	var seconden = 0;
	var animation = ["animation", "animation2"]
	
window.onload = function() {
	console.log("init")
	setInterval(timerfunctie, 1000)
}

function shrink() { 
	circlesize--
	console.log("cirkelsize: " + circlesize)
	document.getElementById("circle").style.height = circlesize + "px";
	document.getElementById("circle").style.width = circlesize + "px";
	counter1 = counter1 + 1;
	document.getElementById("circlecounter").innerHTML = "Circle clicked" +" "+ counter1 + " " + "time(s).";
	if (circlesize <= 5) {
		
		document.getElementById("text").style.display = "block";
		
	}
	
	circleanimation()
}
function circleanimation() {
	var gekozenanimatie = animation[Math.floor(Math.random()*animation.length)];
	console.log(gekozenanimatie);
	var element = document.getElementById("circle");
	for (var  i = 0; i < animation.length; i++) {
		
		element.classList.remove(animation[i]);
	}
		element.classList.add(gekozenanimatie);
	
	
	
	
}


function timerfunctie(){
	seconden++;
	console.log(seconden)
	document.getElementById("secs").innerHTML = seconden + " " +  "seconds elapsed.";
}
