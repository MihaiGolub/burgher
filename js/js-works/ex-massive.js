var massive = ['Привет', 'loftschool'];
console.log(massive.length);
massive.push('Я изучаю');
massive.push('JavaScript');
console.log(massive.length);

for (var i=0; i < massive.length; i++) {
	console.log(i);
}
for (var i=0; i < massive.length; i++) {
	console.log(massive[i]);
}

var numbers = [24, 109, 75, 204, 11, 118, 160, 2, 65, 101];
console.log(numbers.length);

for (var i=0; i < numbers.length; i++) {
	if (numbers[i]>100) {console.log(numbers[i]);}
}