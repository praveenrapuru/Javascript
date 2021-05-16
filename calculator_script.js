function num(val) {
	document.getElementById("text").value += val;
}
function solve() {
	var values = document.getElementById("text").value;
	let result = eval(values);
	document.getElementById("text").value = result;
}
function cleard() {
	document.getElementById("text").value = "";
}

