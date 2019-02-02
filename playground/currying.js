/*
Apply any function to defined number of arguments
*/
function curry(fn) {
  function nest(N, args) {
    return (...xs) => {
      if (N - xs.length <= 0) {
        return fn(...args, ...xs);
      }
      return nest(N - xs.length, [...args, ...xs]);
    };
  }
  return nest(fn.length, []);
}

/*
// Another variant
function curry(fn) {
  return (...xs) => {
    if (xs.length === 0) {
      throw Error('EMPTY INVOCATION');
    }
    if (xs.length >= fn.length) {
      return fn(...xs);
    }
    return curry(fn.bind(null, ...xs));
  };
}
*/
const sum3 = curry((x, y, z) => x + y + z);

console.log('*** Apply any function to defined number of arguments');
console.log(
  sum3(5, 10, 15),
  sum3(5, 10)(15),
  sum3(5)(10, 15),
  sum3(5)(10)(15),
);

/*
 Collect any number of params to array
*/
function carryCollectToArray() {
  var ap = Array.prototype;
  var args = arguments;

  return function () {
      function fn () {
          if (arguments.length != 0) {
              ap.push.apply(fn.args, arguments);
              return fn;
          } else {
              console.log(fn.args);
              return 'hi'; 
          }
      }
      fn.args = ap.slice.call(args, 1);
      return fn.apply(this, arguments);
  }
}

var f = carryCollectToArray();
var a = f(5)(10)(15);
console.log('*** Collect any number of params to array');
a();
//(myCarry()(2)(5)(10))();