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
		var mySwiper = new Swiper('.swiper-container', {
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
		console.log(truc);
	}
});