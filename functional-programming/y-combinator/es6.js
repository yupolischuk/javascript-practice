// es6 y-combinator
// https://levelup.gitconnected.com/implementing-recursion-with-the-y-combinator-in-any-language-9e83fa369ca
const Y = f => (x => x(x))(x => f(y => x(x)(y)));
const factorial = f => (x => (x === 1 ? 1 : x * f(x - 1)));
const YFactorial = Y(factorial)(7);

console.log('YFactorial: ' + YFactorial);
