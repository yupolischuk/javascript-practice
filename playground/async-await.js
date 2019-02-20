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


async function main() {
    let oneRes = await one(initStr);
    let twoRes = await two(oneRes);
    let threeRes = await three(twoRes);

    console.log(threeRes);
}
main();




