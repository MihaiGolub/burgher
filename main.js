let btn = document.getElementById('mobileSidebar');
let menuClose = document.getElementById('mobilemenuClose');

 btn.addEventListener('click', function() {
	let menu = document.getElementById('mobileMenu');
	menu.classList.add('mobile-menu--open');
});

 menuClose.addEventListener('click', function() {
	let menu = document.getElementById('mobileMenu');
	menu.classList.remove('mobile-menu--open');
});



