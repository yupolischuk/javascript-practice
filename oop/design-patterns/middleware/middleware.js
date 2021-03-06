"use strict";

let info = { msg: '' };

class Middleware {
    constructor() {
        this.middlewares = [];
    }

    use(fn) {
        this.middlewares.push(fn);
    }

    executeMiddleware(middlewares, data, next) {
        const composition = middlewares.reduceRight((next, fn) => v => {
            // collect next data
            info = data;
            fn(info, next)
        }, next);       
        composition(data);
    }

    run(data) {
        this.executeMiddleware(this.middlewares, data, (info, next) => {
            console.log(data);
        });
    }
}
module.exports = Middleware;

