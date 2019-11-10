<?php

// https://eddmann.com/posts/implementing-and-using-memoization-in-php/
$memoize = function(callable $func) {
    return function() use ($func) {
        static $cache = [];

        $args = func_get_args();
        $key = md5(serialize($args));

        if ( ! isset($cache[$key])) {
          print_r($args);
            $cache[$key] = call_user_func_array($func, $args);
        } else {
          print_r($cache[$key] . ' exsists ' .PHP_EOL);
        }

        return $cache[$key];
    };
};

$factorial = $memoize(function($n) use (&$factorial) {
    return ($n < 2) ? 1 : $n * $factorial($n - 1);
});

$fibonacci = $memoize(function($n) use (&$fibonacci) {
    return ($n < 2) ? $n : $fibonacci($n - 1) + $fibonacci($n - 2);
});

print_r($factorial(10).PHP_EOL); // 3628800
print_r($factorial(10).PHP_EOL); // already calculated -> gets from memory

print_r($fibonacci(10)); // 55
