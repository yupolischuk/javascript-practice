/*
    Run a set of asynchronous tasks in parallel 
    by spawning them all at once, and then wait
    for all of them to complete by counting the 
    number of times their collbacks are invoked.
*/


function finish() {
    console.log('all the tasks completed');
}

function asyncFunc(index, callback) {
    setTimeout(() => {
        console.log('async function processed index: ' + index);
        callback();
    }, 1000);
}

const collection = [1, 2, 3, 4, 5];

let completed = 0;
collection.forEach(item => {
    asyncFunc(item, () => {
        if (++completed === collection.length) {
            finish();
        }
    });
});
