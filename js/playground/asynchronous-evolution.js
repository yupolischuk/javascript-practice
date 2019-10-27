// console.log('*********************');
// console.log('***** Callbacks *****');
// console.log('*********************');

// function getData(callback) {
//     let init = 'Init ';
//     setTimeout(() => {
//         console.log('getData called');
//         callback(init);
//     }, 1000);
// }

// function getMoreData(a, callback) {
//     let res = a + ' handled by second ';
//     setTimeout(() => {
//         console.log('getMoreData called');
//         callback(res);
//     }, 1000);
// }


// getData(a => {
//     getMoreData(a, b => {
//         getMoreData(b, c => {
//             getMoreData(c, d => {
//                 getMoreData(d, e => {
//                     console.log('Final result: ' + e);
//                 })
//             })
//         })
//     })
// })


//******************************************* */
// console.log('*********************');
// console.log('***** Promises ******');
// console.log('*********************');

// function getData(callback) {
//     return new Promise((res, rej) => {
//         let init = 'Init ';
//         setTimeout(() => {
//             console.log('getData called');
//             res(init);
//         }, 1000);
//     })
// }

// function getMoreData(a, callback) {
//     return new Promise((res2, rej) => {
//         let res = a + ' handled by second ';
//         setTimeout(() => {
//             console.log('getMoreData called');
//             res2(res);
//         }, 1000);
//     })
// }


// getData()
// .then(a => getMoreData(a))
// .then(b => getMoreData(b))
// .then(c => getMoreData(c))
// .then(d => getMoreData(d))
// .then(e => console.log('Final result: ' + e));

//******************************************* */

// getData()
// .then(getMoreData)
// .then(getMoreData)
// .then(getMoreData)
// .then(getMoreData)
// .then(console.log);



//******************************************* */
console.log('***********************');
console.log('***** Async-await *****');
console.log('***********************');

function getData(callback) {
    return new Promise((res, rej) => {
        let init = 'Init ';
        setTimeout(() => {
            console.log('getData called');
            res(init);
        }, 1000);
    })
}

function getMoreData(a, callback) {
    return new Promise((res2, rej) => {
        let res = a + ' handled by second ';
        setTimeout(() => {
            console.log('getMoreData called');
            res2(res);
        }, 1000);
    })
}


// (async () => {
//     const a = await getData();
//     const b = await getMoreData(a);
//     const c = await getMoreData(b);
//     const d = await getMoreData(c);
//     const e = await getMoreData(d);
//     console.log('Final result: ' + e);
// })();

// //******************************************* */

(async () => {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getMoreData(b);
        const d = await getMoreData(c);
        const e = await getMoreData(d);
        console.log('Final result: ' + e);
    }
    catch(me) {
        // if you can!
    }
})();
