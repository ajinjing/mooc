function hasClass(obj,cls) {
	return obj.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"));
}
function addClass(obj,cls) {
	if (!hasClass(obj,cls)) {
		obj.className += " "+cls;
		obj.className = obj.className.trim();
	}
}
function removeClass(obj,cls){
	if (hasClass(obj,cls)) {
		var reg = new RegExp("(\\s|^)"+cls+"(\\s|$)");
		obj.className = obj.className.replace(reg," ").trim();
	}
}

