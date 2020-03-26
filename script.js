var pa=0;
var pt=250;

function showPt(){
	if (pt == null) {
		pt = 250
	} else {
		var pt = parseInt(document.getElementById("pt").value);
	}
	alert("La produccion estimada total es"+pt);
}

function showPa(){
	alert("La produccion estimada actual es"+pa);
	document.getElementById("pa").innerHTML = pa;
}

function add10(){
	pa +=10;
	document.getElementById("pa").innerHTML = pa;
}

function add15(){
	pa +=15;
	document.getElementById("pa").innerHTML = pa;
}

function add30(){
	pa +=30;
	document.getElementById("pa").innerHTML = pa;
}

function add50(){
	pa +=50;
	document.getElementById("pa").innerHTML = pa;
}

function showPercentage(){
	var percentage = (pa/pt) *100;
	alert("El porcentage es "+percentage);
	if (percentage >= 70) {
		document.getElementById("image1").src = "image2.png";
	}
}



