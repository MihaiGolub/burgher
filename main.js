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

let btnMore = document.getElementById('more');
let closeMore = document.getElementById('peoplePage');

btnMore.addEventListener('click', function(listen){
	listen.preventDefault();
	let coment = document.getElementById('pComent');
	coment.classList.add('people__comment_active');
});

btnMore.addEventListener('click', function(listen){
	listen.preventDefault();
});
