var Nav = document.querySelectorAll('#navId a');
		var p = window.location.href;
		for (let page of Nav){
			if (p == page.href){
				page.classList.add("pageActive")
			}
		}