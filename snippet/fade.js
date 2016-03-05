function fade( ele, type, ms, isIE ) {
	var isIn = (type === "in");  
	var opacity = 1,
		interval = 50;
		increase = parseFloat((interval/ms).toFixed(2));
	if(isIn) {
		opacity = 0;
		ele.style.display = "block"
	}
	var fading = setInterval(func, interval);

	function func() {
		opacity = isIn ? (opacity + increase) : (opacity - increase);
		if(opacity >= 1 || opacity <= 0) clearInterval(fading);

		if(opacity >= 1) opacity = 1;
		if(opacity <= 0) {
			opacity = 0;
			ele.style.display = "none";
		}
		if(isIE) {
			ele.style.filter = 'alpha(opacity='+ opacity * 100 +')';
			ele.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')';
		}
		ele.style.opacity = opacity;
	}
}