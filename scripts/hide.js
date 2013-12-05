/*
Simple script to hide/show elements of a certain class.
*/

var className = "core";

var elements = document.getElementsByClassName(className);
var originalDisplay = [];
var shown = true;

function prepare() {
	for (var i = 0; i < elements.length; i++) {
		originalDisplay[i] = elements[i].style.display;
	};
};

function show() {
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = originalDisplay[i];
	};
};

function hide() {
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	};
};


var hideshow = document.getElementById("hideshow");
hideshow.style.display = "inline";

hideshow.onclick = function() {
	if (shown) {
		hide();
		shown = false;
		this.innerHTML = "Show Core";
	} else {
		show();
		shown = true;
		this.innerHTML = "Hide Core";
	}
}

prepare();
hideshow.onclick();