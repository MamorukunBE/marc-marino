var scrollerstatables;

window.addEventListener("load", (e) => {
	document.querySelector('.hider').style.width = "0";
	let topNavStyles = document.querySelector('nav.top').style;
	topNavStyles.opacity = "1";
	topNavStyles.transform = "translateY(0)"
	if (document.body.id == 'home') {
		let titleStyles = document.querySelector('.splash .content').style;
		titleStyles.opacity = "1";
		titleStyles.transform = "translateY(0)"
	} else if (document.body.id == 'projects') {
		let projects = Array.from(document.querySelectorAll('.splash .content>div a'));
		projects.forEach((e) => {
			e.addEventListener('mouseenter', function(event) {
				if (window.innerWidth > 1024)
					this.parentNode.querySelector('.img').style.opacity = '1';
			})
			e.addEventListener('mouseleave', function (event) {
				if (window.innerWidth > 1024)
					this.parentNode.querySelector('.img').style.opacity = '.5';
			})
		})
	}
	else if (document.body.id == 'annabelle') {
		new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			centeredSlides: true,
			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}

	// ScrollAtStart
	//--------------
	scrollerstatables = Array.from(document.querySelectorAll('.scrollerstart'));
	//-----
	window.addEventListener('scroll', () => { CheckScrollableStarts(); });
	CheckScrollableStarts(true);		// For screen user refresh after scroll
	//-----
	function CheckScrollableStarts(initTransitions = false) {
		scrollerstatables.forEach((e, i) => {
			if (window.innerHeight >= e.getBoundingClientRect().top) {
				e.style.top = "0";
				scrollerstatables = scrollerstatables.filter((elem) => {
					return elem != e;
				});
			}
			//-----
			if (initTransitions) {
				e.offsetHeight;		// Trigger CSS changes flush, to force transition spec AFTER elements abocve cursor to position correctly at DOM display
				e.style.transition = "all .5s ease-in-out";
			}
		});
	}
});