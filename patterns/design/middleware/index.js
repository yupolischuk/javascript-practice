const Middleware = require('./middleware');
const middleware = new Middleware();

middleware.use(function firstFunc(info, next) {
    info.msg += ' World';
    next();
});

middleware.use(function secondFunc(info, next) {
    info.msg += ' !!!';
    next();
});

// Run the middleware with initial value
middleware.run({msg: 'Hello'});