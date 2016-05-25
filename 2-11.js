'use strict'

/* 2-11 */
var name = prompt("What is your name?", '');

alert ( 'Hello, ' + name + '!' );

/* 2-12 #1 */
var standart = prompt('What is official name of JavaScript?'. '');

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
} else {
	alert('0 Is your num zero?!');
}

/* 2-12 #3 */
var login = prompt('Who are you?', 'for admin enter - admin');

if (login == admin){
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