var eventUtil = {
	addHandler: function(el, type, handler) {
		if(el.addEventListener) {
			el.addEventListener(type, handler, false);
		} else if(el.attachEvent) {
			el.attachEvent('on' + type, handler);
		} else {
			el['on' + type] = handler;
		}
	},
	removeHandler: function(el, type, handler) {
		if(el.removeEventListener) {
			el.removeEventListener(type, handler, false);
		} else if(el.detachEvent) {
			el.detachEvent('on' + type, handler);
		} else {
			el['on' + type] = null;
		}
	},
	getTarget: function(e) {
		var _e = getEvent(e)
		return _e.target || _e.secElement;
	},
	getEvent: function(e) {
		return e ? e : window.event;
	},
	stopPropagation: function(e) {
		var _e = getEvent(e);
		if(_e.stopPropagation) {
			_e.stopPropagation()
		} else {
			_e.cancelBubble = true;
		}
	}
}