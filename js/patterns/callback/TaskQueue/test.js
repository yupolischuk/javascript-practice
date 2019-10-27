const taskQueue = require('./taskQueue');

function asyncFuncOne(callback) {
    setTimeout(() => {
        console.log('first async function processed');
        callback();
    }, 1000);
}

function asyncFuncTwo(callback) {
    setTimeout(() => {
        console.log('second async function processed');
        callback();
    }, 1000);
}

function asyncFuncThree(callback) {
    setTimeout(() => {
        console.log('third async function processed');
        callback();
    }, 1000);
}

let tq = new taskQueue(2);
tq.pushTask(asyncFuncOne);
tq.pushTask(asyncFuncTwo);
tq.pushTask(asyncFuncThree);


