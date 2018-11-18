document.querySelector('#container');
const cnt = document.querySelector('#container');
cnt.style.color = '#000';

const firstdiv = document.createElement('div');

cnt.appendChild(firstdiv);

document.querySelector('.firstdiv');
firstdiv.textContent = 'Этот элемент создан при помощи DOM API';

const inner = document.createElement('div');
document.querySelector('.inner');
inner.textContent = 'Этот элемент тоже создан при помощи DOM API';

firstdiv.appendChild(inner);
document.querySelector('firstdiv');
firstdiv.style.color = '#d3b72c';


document.querySelector('firstdiv');
firstdiv.addEventListener('click', function() {
	console.log('Этот текст говорит о том, что я всё сделал правильно');
});






