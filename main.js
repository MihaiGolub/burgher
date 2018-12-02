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



const overlayContainer = document.querySelector('#accord');
const successOverlay = openOverlay("<b>Константин Спилберг</b> <br> \
	Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным. Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.");

	accord.addEventListener('click', function(event){
	 	if(event.target.classList.contains('bText')){
	 		document.body.appendChild(successOverlay);
	 	}
	})


  




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
			to: myForm.elements.to.value,
			comment: myForm.elements.comment.value
		};



		const xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/fail');
        xhr.send(JSON.stringify(FormData));




		xhr.addEventListener('load', () => {

			if (xhr.status == 200) {
         let message = document.getElementById('trueMessage');
	     message.classList.add('send__true-active');


}   
		})
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
     	if (!validateField(form.elements.comment)) {
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
	
$('#fullpage').fullpage({
	menu: '#myMenu',
});





$('#black1').on('click', function() {
    $(acc1Open).toggleClass('active');
});

$('#black2').on('click', function() {
    $(acc2Open).toggleClass('active');
});
$('#black3').on('click', function() {
    $(acc3Open).toggleClass('active');
});