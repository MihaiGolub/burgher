
function hello(human) {
}

var person = {
	name: 'Михаил',
	lastName:'Голубов',
	old: 22
}
hello(person);

var salut = 'Привет меня зовут ' + person.name + ' ' + person.lastName + ' и мне '+ person.old + ' года!';
alert(salut);