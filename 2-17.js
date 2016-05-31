/* 2-17 #1 */
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
	return age > 18 ? true : confirm ('Does parents know about that?');
}

function checkAge(age) {
	return age > 18 == true || confirm ('Does your PARENTS know about that?');
}

/* 2-17 #2 */
function min(a, b) {
	return a < b ? a : b;
}

/* 2-17 #3 */
var x = prompt('Enter x:', '');
var n = prompt('Enter n:', '');

function pow(x, n) {
	var result = x	
	
	for(var a = 1; a < n; a++){
		result *= x;
	}

	return result;
}

n <= 1 ? alert (n + 'Enter num bigger than 1') : alert(pow(x, n));

