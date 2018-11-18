const phone = document.createElement('input');
document.body.appendChild(phone);
document.querySelector('#phone');
phone.addEventListener('keydown', function (event) {
	console.log(event.key)
})

const btn = document.createElement('button');
document.body.appendChild(btn);
document.querySelector('#btn');
btn.addEventListener('click', function (value){
	console.log(phone.value);
})