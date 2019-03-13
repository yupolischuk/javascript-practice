/*
  Recursive Task Iterator

  when we need to iterate asynchronously 
  all elements in collection sequentally 
  but dont know amount of tasks 
  in general iterating over a list of tasks
  (example - downloading all pages of site)

  task must not be synchronous operation 
  because we risk a hitting 
  the maxumim stack size limit  

 */
const amountFuncCalls = 7;
const tasks = Array(amountFuncCalls).fill(asyncFunction);

function asyncFunction(index, callback) {
    setTimeout(() => {
        console.log('async function processed index: ' + index);
        callback();
    }, 1000);
}

function finish() {
    console.log('iteration completed');
}

function iterate(index) {
    if(index === tasks.length) {
        return finish();
    }
    const task = tasks[index];
    task(index, function() {
        iterate(index + 1);
    });
}

iterate(0);
