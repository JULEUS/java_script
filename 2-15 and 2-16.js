/* 2-15 #1 */
var i = 2;

for (i = 0; i <= 10; i++){
	if (i % 2 != 0) continue;
	alert(i);
}

/* 2-15 #2 */
var i = 0;

while (i < 3){
	alert("Num" + i + "!");
	i++;
}

/* 2-15 #3 */
var i;
do{
	i = prompt('Enter a num bigger than 100');
} while (i <= 100 && i != null);

/* 2-15 #4 */
numTest:
  for (var a = 2; a <= 10; a++) {
    
    for (var b = 2; b < a; b++) {
      if (a % b == 0) continue numTest;
    }
    alert( a );
  }

/* 2-16 #1 */
var browser;

if (browser == 'IE'){
	alert ('You have IE!');
} else if('Chrome' || 'Firefox' || 'Safari' || 'Opera'){
	alert('This browser we also support');
} else{
	alert('We hope in your browser is everything ok');
}


/* 2-16 #2 */
var a = +prompt('Enter a:', '');

switch(a){
	case 0:
		alert(0);
		break;

	case 1:
		alert(1);
		break;

	case 2:
	case 3:
		alert('2,3');
		break;
}