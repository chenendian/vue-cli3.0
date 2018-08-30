(function(){
	var designWidth = 750,
		maxWidth = 750;
	var doc = document,
		win = window,
		docEl = doc.documentElement,
		remStyle = document.createElement("style"),
		tid;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		maxWidth = maxWidth || designWidth;
		width > maxWidth && (width = maxWidth);
		var rem = width * 100 / designWidth;
		window.px2rem = function(px) {
			var val = parseFloat(px) * rem;
			if(typeof px === 'string' && px.match(/rem$/)) {
				val += 'px';
			}
			return val;
		}
		remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
	}

	if(docEl.firstElementChild) {
		docEl.firstElementChild.appendChild(remStyle);
	} else {
		var wrap = doc.createElement("div");
		wrap.appendChild(remStyle);
		doc.write(wrap.innerHTML);
		wrap = null;
	}
	refreshRem();

	win.addEventListener("resize", function() {
		clearTimeout(tid); //防止执行两次
		tid = setTimeout(refreshRem, 300);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if(e.persisted) { // 浏览器后退的时候重新计算
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);

	if(doc.readyState === "complete") {
		doc.body.style.fontSize = "16px";
	} else {
		doc.addEventListener("DOMContentLoaded", function() {
			doc.body.style.fontSize = "16px";
		}, false);
	}
})();
