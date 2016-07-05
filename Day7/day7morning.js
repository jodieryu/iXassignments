function getFormValues() {
	console.log(first.value, last.value);
}

function changeColor() {
	document.getElementById("color-div").style.color = "red";
}

function toggleImage() {
	
}

document.getElementById("name-btn").onclick = function() {
	getFormValues();
};
document.getElementById("color-btn").onclick = function() {
	changeColor();
};
document.getElementById("lightbox").onclick = function() {
	toggleImage();
}