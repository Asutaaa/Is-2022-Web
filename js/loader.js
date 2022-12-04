var start = Date.now();
	function l() {
					answer.textContent = 'Page load: ' + (Date.now() - start) + 'ms'
			}
			window.addEventListener("load", l);