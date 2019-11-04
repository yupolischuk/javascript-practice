<?php

// todo add use example

function memoize(callable $func) {
  print_r('memoize called');
  return function () use ($func) {
    static $cache = [];
    $args = func_get_args();
    $key = serialize($args);

    if (!array_key_exists($key, $cache)) {
      $cache[$key] = $func($args);
    }
    return $cache[$key];
  };
}
