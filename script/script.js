window.addEventListener("load", (e) => {
	document.querySelector('.splash .hider').style.width = "0";
	let topNavStyles = document.querySelector('nav div.top').style;
	topNavStyles.opacity = "1";
	topNavStyles.transform = "translateY(0)"
	let titleStyles = document.querySelector('.splash .content').style;
	titleStyles.opacity = "1";
	titleStyles.transform = "translateY(0)"
});