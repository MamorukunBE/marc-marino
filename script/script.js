var scrollerstatables;

window.addEventListener("load", (e) => {
  	document.querySelector('.splash .hider').style.width = "0";
	let topNavStyles = document.querySelector('nav.top').style;
	topNavStyles.opacity = "1";
	topNavStyles.transform = "translateY(0)"
	if (document.body.id == 'home') {
		let titleStyles = document.querySelector('.splash .content').style;
		titleStyles.opacity = "1";
		titleStyles.transform = "translateY(0)"
	} else if (document.body.id == 'projects')
	{
		let projects = Array.from(document.querySelectorAll('.splash .content>div a'));
		projects.forEach((e) => {
			e.addEventListener('mouseenter', function(event) {
				this.parentNode.querySelector('.img').style.opacity = '1';
			})
			e.addEventListener('mouseleave', function (event) {
				this.parentNode.querySelector('.img').style.opacity = '0';
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
		//-----
		let scrollerstatableObjs = document.querySelectorAll('.scrollerstart');
		scrollerstatables = Array.from(scrollerstatableObjs);
		window.addEventListener('scroll', () => {
			let scrollerstatablesTmp = scrollerstatables;
			console.log(" ----- Start check " + scrollerstatables);
			scrollerstatables.forEach((e, i) => {
				let objBottomPosAtScreen = e.getBoundingClientRect().top;
				let objBottomPosAtBody = window.pageYOffset + objBottomPosAtScreen;
				let scrollBottomPosAtBody = window.pageYOffset + window.innerHeight;
				console.log("Checking " + i + " on: " + e.id);
				console.log("objBottomPosAtScreen: " + objBottomPosAtScreen + ", objBottomPosAtBody: " + objBottomPosAtBody + ", scrollBottomPosAtBody: " + scrollBottomPosAtBody);
				if (scrollBottomPosAtBody >= objBottomPosAtBody) {
					console.log("1 - " + i + ", id: " + e.id);
					e.classList.remove('scrollerstart');
					scrollerstatablesTmp.pop(e);
					console.log(scrollerstatablesTmp);
				}
			});
			scrollerstatables = scrollerstatablesTmp;
		});
	}
});