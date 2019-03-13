/*
  Recursive General Task Iterator

  When we need to iterate asynchronously 
  all elements in collection sequentally 
  but dont know amount of tasks 
  in general iterating over a list of tasks
  (example - downloading all pages of site)

  Task must not be synchronous operation 
  because we risk a hitting 
  the maxumim stack size limit  

 */

const collection = [1, 2, 3, 4, 5];

function asyncFunc(index, callback) {
    setTimeout(() => {
        console.log('async function processed index: ' + index);
        callback();
    }, 1000);
}

function finishFunc() {
    console.log('iteration completed');
}


function iterateSeries(collection, iteratorCallback, finalCallback, index=0) {
    if (index === collection.length) {
        return finalCallback();
    }
    const item = collection[index];
    iteratorCallback(item, function() {
        iterateSeries(collection, iteratorCallback, finalCallback, index + 1);
    })
}
iterateSeries(collection, asyncFunc, finishFunc);

