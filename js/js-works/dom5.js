const loftschool = document.createElement('a');
loftschool.href = 'https://loftschool.com';
document.querySelector('.firstdiv');
loftschool.textContent = 'https://loftschool.com';
document.body.appendChild(loftschool);
loftschool.addEventListener('click',function(event) {
	event.preventDefault()

})
loftschool.addEventListener('click', function(){
	console.log('Я кликнул на ссылку https://loftschool.com')
})