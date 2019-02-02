function myCarry() {
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

var f = myCarry();
var a = f(5)(10)(15);
a();

//(myCarry()(2)(5)(10))();