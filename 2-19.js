/* 2-19 #1 */
function sumTo(n) {
	var result = 0, i;
	for (i = 1; i <= n; i++){
		result += i;
	}
	return result;
}
alert (sumTo(5));

function sumTo(n) {
	if (n >= 1) {
		return n + sumTo(n-1);
	} else {
		return n;
	}
}
alert (sumTo(5));

function sumTo(n) {
  return n * (n + 1) / 2;
}
alert (sumTo(5));

/* 2-19 #2 */
function factorial(n) {
	if (n != 1) {
		return n * factorial(n-1);
	} else{
		return n;
	}
}

/* 2-19 #3 */
function fib(n) {
	if (n <= 1){
		return n
	} else {
		return n = fib(n-1)+fib(n-2);
	}
}
alert (fib(3)); 
alert (fib(7)); 
alert (fib(77));