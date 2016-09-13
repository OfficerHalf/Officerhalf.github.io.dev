function hideIt(type, id) {
	var die = document.getElementById(type + id);
	if(die.style.display == "none")
		die.style.display = "inline";
	else
		die.style.display = "none";
}

function addFields(type) {
	var row = document.getElementById(type+"Row");
	for(var i = 1; i <= 10; i++) {
		var input = row.insertCell(i+1);
		input.type = "number";
		input.maxlength = "2";
		input.id = type+"Die"+i;
		//input.style.display = "none";
	}
}

function updateNumDice(type) {
}