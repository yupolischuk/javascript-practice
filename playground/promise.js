var initStr = 'Init ';

function one(str) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('function one called');
            res(str + ' one ');
        }, 1500);
    });
}

function two(str) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('function two called');
            res(str + ' two');
        }, 1800);
    })
}

function three(str) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('function three called');
            res(str + ' three');
        }, 1700);
    })
}


function res(str) {
    return one(str)
        .then(function (res) {
            return two(res)
        })
        .then(res => {
            return three(res)
        })
        .then(res => {
            return (res);
        });
}

res(initStr).then(a => console.log(a));