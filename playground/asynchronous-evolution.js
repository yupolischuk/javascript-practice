 getData(a => {
    getMoreData(a, b => {
        getMoreData(b, c => {
            getMoreData(c, d => {
                getMoreData(d, e => {
                    console.log(e);
                })
            })
        })
    })
})


//******************************************* */

getData()
.then(a => getMoreData(a))
.then(b => getMoreData(b))
.then(c => getMoreData(c))
.then(d => getMoreData(d))
.then(e => console.log(e));

//******************************************* */

getData()
.then(getMoreData)
.then(getMoreData)
.then(getMoreData)
.then(getMoreData)
.then(console.log);


//******************************************* */

(async () => {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getMoreData(b);
    const d = await getMoreData(c);
    const e = await getMoreData(d);
    console.log(e);
})();

//******************************************* */

(async () => {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getMoreData(b);
        const d = await getMoreData(c);
        const e = await getMoreData(d);
        console.log(e);        
    }
    catch(me) {
        // if you can!
    }
})();

