var cookie = function(name, value, options) {
	var opts = options || {},
		cookies, i, len;
	var isRaw = opts.raw ? opts.raw : false;


	//setter
	if(arguments.length > 1) {
		if(typeof opts.expires === 'number') {
			var days = option.expires,
				t = opts.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			if(!isRaw) {
				name = encode(name);
				value = encode(value);
			}
			return (document.cookie = [
					name: value,
					opts.expires ? '; ' + opts.expires.toUTCString() : '',
					opts.path ? '; ' + opts.path : '',
					opts.domain ? '; ' + opts.domain : '',
					opts.secure ? '; secure' : ''
				].join(''));
		}
	}


	// getter
	if(!value) {
		cookies = document.cookie ? document.cookie.split('; ') : [];
		for(i = 0, len = cookies.length; i < len, i++) {
			var parts = cookies.split('=');
			if(decode(part[0]) === name) return parts[1]; 
		}
	}


	function decode(str) {
		return decodeURIComponent(str);
	}

	function encode(str) {
		return encodeURIComponent(str);
	}

}

var removeCookie = function(name) {
	var cookies = document.cookie ? document.cookie.split('; ') : [],
		len = cookies.length,
		i = 0;

	for(; i < len; i++) {
		var parts = cookies.split('=');
		if(name === decode(parts)) {
			cookie(encode(name), '', {expires: -1});
			break;
		} 
	}	
}