function getFormValues() {
	console.log(first.value, last.value);
}

function changeColor() {
	document.getElementById("color-div").style.color = "red";
}

function toggleImage() {
	document.getElementById("lightbox").classList.add("isVisible");
}

function closeMenu() {
  	document.getElementById("lightbox").classList.remove('isVisible');
}


document.getElementById("name-btn").onclick = function() {
	getFormValues();
};
document.getElementById("color-btn").onclick = function() {
	changeColor();
};
document.getElementById("image-btn").onclick = function() {
	toggleImage();
};
document.getElementById('lightbox').onclick = function() {
  	closeMenu();
};