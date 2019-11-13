<?php

function expensiveComputationEmulation ($val) {
    sleep('5');

    return $val * 2;
}

function lazify(callable $callback, ...$vals) {
    return function () use ($callback, $vals) {
        return call_user_func_array($callback, $vals);
    };
};

$value = lazify('expensiveComputationEmulation', 5);

print_r($value); // function not called
print_r($value()); // function called
