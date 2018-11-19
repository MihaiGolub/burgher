let btn = document.getElementById('mobile__sidebar');
let menuClose = document.getElementById('mobilemenuClose');

btn.addEventListener('click', function(){
	let menu = document.getElementById('mobileMenu');
	menu.classList.add('mobile-menu--open');
});
