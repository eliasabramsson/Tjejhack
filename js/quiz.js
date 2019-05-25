function check(){
	
var f1 =document.quiz.f1.value;
var f2 =document.quiz.f2.value;
var f3 =document.quiz.f3.value;

var rätt= 0;


if (f1 == "Monty Python") {
	rätt++;
};

if (f2 == "Turtle") {
	rätt++;
};

if (f3 == "Textprogrammering") {
	rätt++;
};



	document.getElementById("efterskickat").style.visibility="visible";
	document.getElementById("resultat").innerHTML = "Du fick " + rätt + " rätt av 3!";
}
