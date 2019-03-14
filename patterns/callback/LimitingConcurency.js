const collection = [1, 2, 3, 4, 5];

let concurency = 2;
let running = 0;
let completed = 0;
let index = 0;

function finish() {
    console.log('all the tasks completed');
}

function asyncFunc(index, callback) {
    setTimeout(() => {
        console.log('async function processed index: ' + index);
        callback();
    }, 1000);
}

function next() {
    while(running < concurency && index < collection.length) {
        const task = collection[index++];
        asyncFunc(task, () => {
            if(completed === collection.length-1) {
                return finish();
            }
            completed++, running--;
            next();
        });
        running++;
    }
}
next();

