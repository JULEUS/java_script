'use strict'

var name = prompt("What is your name?", '');

alert ( 'Hello, ' + name + '!' );

/* 2-12 #1 */
var standart = prompt('What is official name of JavaScript?', '');

if (standart === "ECMAScript"){
	alert('You are right!!!');
} else {
	alert('Sorry, but it is not an answer. It is ECMAScript!');
}

/* 2-12 #2 */
var enterNum = prompt('Please, enter a number', '');

if (enterNum > 0){
	alert('1 The num is bigger than zero');
} else if (enterNum < 0){
	alert('-1 Tne num is less than zero');
} else if (enterNum = 0){
	alert('0 Is your num zero?!');
} else {
	alert('It is not a number');
}

/* 2-12 #3 */
var login = prompt('Who are you?', 'for admin enter - admin');

if (login == 'admin'){
	var adminPassword = prompt('Enter an admin password', '');
	if (adminPassword == 'king'){
		alert('Hello, Admin!');
	} else if (adminPassword == null ){
		alert('Access denied');
	} else {
		alert('Wrong password');
	}
} else if (login == null ){
	alert('Access denied');
} else {
	alert('I do not know you');
}

/* 2-12 #4 */
var a = prompt('Enter first num', ''), 
	b = prompt('Enter second num', '');
var summ = (+a + +b < 4) ? 'Not a much!' :
	'Too much or it is not a number!';
alert (summ);

/* 2-12 #5 */
var login = prompt('Enter your login', 'john, boss ...');
var message = (login == 'john') ? 'Hi, John!' :
	message = (login == 'boss') ? 'Hello, Boss!' :
	message = (login == '') ? 'No login' :
	'error';

alert(message);

/* 2-13 #1 */
var age = prompt("Enter a number");
if (age >= 14 && age <= 90){
	alert('Good number');
} else if (age <14 || age > 90){
	alert('Ooops!Too small or too big number');
} else {
	alert('It is not a num!');
}

