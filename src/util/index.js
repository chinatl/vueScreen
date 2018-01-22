function animate(ele, json, fn) {
	clearInterval(ele.timer);
	ele.timer = setInterval(function () {
		var bool = true;
		for (var k in json) {
			if (k == "opacity") {
				var leader = getStyle(ele, k) * 100 || 0;
				var step = (json[k] * 100 - leader) / 10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);

				ele.style[k] = (leader + step) / 100;　　　　　　　　 //兼容IE678
				ele.style.filter = "alpha(opacity = " + (leader + step) + ")"
				if (getStyle(ele, k) != json[k]) {
					bool = false;
				}

			} else if (k == "z-index") {
				ele.style.zIndex = json[k];
			} else {
				var leader = parseInt(getStyle(ele, k)) || 0;
				var step = (json[k] - leader) / 60;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);

				ele.style[k] = step + leader + "px";

				if (parseInt(getStyle(ele, k)) != json[k]) {
					bool = false;
				}
			}
		}
		if (bool) {
			clearInterval(ele.timer);
			if (fn) {
				fn();
			}
		}
	}, 16)
}

function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}
export default animate;
