// var min = document.getElementById("min").value;
// var max = document.getElementById("max").value;
// var numAm = document.getElementById("numAm").value;
// var numSet;
// !!! If variables are declared here, the functions will only consider their default/given value, they will not take into consideration the user input

function generate(){

var min = document.getElementById("min").value;
var max = document.getElementById("max").value;
var numAm = document.getElementById("numAm").value;
var numSet;
// !!!If variables declared here, default value is used, or user input
	var numSet = [];
	while(numSet.length < numAm){
		console.log(numAm)

		var genNum = Math.floor(Math.random() * (max - min + 1) + min);
		if(numSet.indexOf(genNum) === -1) numSet.push(genNum);
	}
	displayResult(numSet);
}	
function displayResult(numSet){
	numSet.join(", ");

	document.getElementById('res').innerHTML = "Result:" + numSet;
}
debugger
/*hoax.indexOf(x) = 3 (position of "x" in the array)
Math.floor = rounds number down
numSet.push(r) = add "r" to the "numSet" array
numSet.join(", ") = return array as a string sepparated by ", " 
(numSet.indexOf(r) === -1) numSet.push(r); = if generated number === no other generated number => add number to numSet ?*/