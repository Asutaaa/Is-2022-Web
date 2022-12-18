window.onscroll = function() {scrollFunction()};
	
	function scrollFunction() {
			if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
					document.getElementById("Btn").style.display = "block";
			} else {
					document.getElementById("Btn").style.display = "none";
			}
	}
	function topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
	}