<?php

// Y-Combinator allows to call anonymous functions recursively
// https://php100.wordpress.com/2009/04/13/php-y-combinator/
/*
// THIS WON\'T WORK!
$factorial = function($n) {
    if ($n <= 1)
        return 1;
    else
        return $n * call_user_func(__FUNCTION__, $n - 1);
};
*/

function Y($F) {
    $func = function ($f) { return  $f($f); };
    return $func(function ($f) use ($F) {
        return $F(function ($x) use ($f) {
            $ff = $f($f);
            return $ff($x);
        });
    });
}

$factorial = Y(function($fact) {
    return function($n) use ($fact) {
        return ($n <= 1) ? 1 : $n * $fact($n-1);
    };
});

print_r($factorial(7));
