function extend() {
	var len = arguments.length, 
		target = arguments[0] || {}, 
		deep = false,
		i = 1,
		options, name, src, copy;

	if(typeof target === "boolean") {
		deep = target;
		target = arguments[1] || {};
		i = 2;
	}

	if(typeof target !== "object") {
		target = {};
	}

	for(; i < len; i++) {
		if((options = arguments[i]) != null) {
			for(name in options) {
				src = target[name];
				copy = options[name];
				if(src === copy) {
					continue;
				}
				if(deep && Object.prototype.toString.call(copy) === "[object Object]") {
					target[name] = extend(deep, src, copy);
				} else if(copy != undefined) {
					target[name] = copy;
				}
			}
		}
	}

	return target;

}
