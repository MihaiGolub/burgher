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
 $('.slider').slick({
 	       prevArrow: '<a href="#" class="burghers__arrow-left">\
						<img src="img/arrow-scroll_left.png" alt="">\
					</a>',
		   nextArrow: '<a href="#" class="burghers__arrow-right">\
						<img src="img/arrow-scroll_right.png" alt="">\
					</a>',
 });

 /*$('#fullpage').fullpage({});*/

const openButton = document.querySelector("#openOverlay");
const successOverlay = openOverlay("<b>Константин Спилберг</b> <br> \
	Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным. Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.");


openButton.addEventListener("click", function() {
  document.body.appendChild(successOverlay);
});

function openOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const containerElement = document.createElement("div");
  containerElement.classList.add("container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  closeElement.addEventListener("click", function(event) {
  	event.preventDefault();
    document.body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}



const myForm = document.querySelector('#myForm');
const send = document.querySelector('#send');

     send.addEventListener('click', function(event) {
	event.preventDefault();

	if (validateForm(myForm)) {
		const FormData = {
			name: myForm.elements.name.value,
			phone: myForm.elements.phone.value,
			to: myForm.elements.to.value
		};
		console.log(FormData);

		const xhr = new XMLHttpRequest();
		xhr.respnseType = 'json';
		xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
		xhr.send(JSON.stringify(FormData));
		xhr.addEventListener('load', () => {
			console.log(xhr.response);
		});
	}
});
     function validateForm(form) {
     	let valid = true;

     	if (!validateField(form.elements.name)) {
     		valid = false;
     	}
     	     	if (!validateField(form.elements.phone)) {
     		valid = false;
     	}
     	     	if (!validateField(form.elements.to)) {
     		valid = false;
     	}

     	return valid;
     }

     function validateField(field) {
     	if (!field.checkValidity()) {
     		field.nextElementSibling.textContent = field.validationMessage;

     		return  false;
     	} else {
     		field.nextElementSibling.textContent = '';

     		return true;
     	}
     }


let trueBtn = document.getElementById('trueMessage');
let closeBtn = document.getElementById('closeBtn');

 /*trueBtn.addEventListener('click', function() {
	let message = document.getElementById('trueMessage');
	menu.classList.add('send__true-active');
});*/

  closeBtn.addEventListener('click', function() {
	let message = document.getElementById('trueMessage');
	message.classList.remove('send__true-active');
});

  let falseMessage = document.getElementById('falseMesage');
  let closeFBtn = document.getElementById('closeFBtn');

    closeFBtn.addEventListener('click', function() {
	let falseMessage = document.getElementById('falseMessage');
	falseMessage.classList.remove('send__false-active');
});
    