function factTR(n, a) {
	if (n === 0) {
		return a;
	} else {
		return factTR(n - 1, n * a);
	}
}


function fact(n) {
	return factTR(n, 1);
}

console.log(fact(5));
