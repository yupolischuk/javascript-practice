/*
    Simple callback chain
 */
// var initStr = 'Init ';
//
// function one (str) {
//     console.log('function one called');
//     setTimeout(() => {
//         two(str + ' one ');
//     }, 1000);
// }
//
// function two (str) {
//     console.log('function two called');
//     setTimeout(() => {
//         three(str + ' two ');
//     }, 1000);
// }
//
// function three (str) {
//     console.log('function three called');
//     setTimeout(() => {
//         runChainAgain(str + ' three');
//     }, 1000)
// }
//
// function runChainAgain (str) {
//     one(str); // will run infine async loop
// }
//
//
// one(initStr);




//***********************************************
/*
    Callbacks called in main function
 */
// var initStr = 'Init ';
//
// function one(str, callback) {
//     setTimeout(() => {
//         console.log('function one called');
//         str = str + ' one';
//         callback(str);
//     }, 1000);
// }
//
// function two(str, callback) {
//     setTimeout(() => {
//         console.log('function two called');
//         str = str + ' two';
//         callback(str);
//     }, 1000);
// }
//
// function three(str, callback) {
//     setTimeout(() => {
//         console.log('function three called');
//         str = str + ' three';
//         callback(str);
//     }, 1000);
// }
//

/*
 run callback chain
 */

// function main(str0, callback) {
//     one(str0, function (res1) {
//         two(res1, function (res2) {
//             three(res2, function (res3) {
//                 callback(res3)
//             });
//         });
//     });
// }

/*
 run callback chain with arrow funcitons
  */

// function main(str, callback) {
//     return one(str, res1 => two(res1, res2 => three(res2, res3 => callback(res3))));
// }

// main(initStr, function (res) {
//     console.log(res);
// });




