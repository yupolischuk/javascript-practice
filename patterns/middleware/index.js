const Middleware = require('./middleware');
const middleware = new Middleware();

middleware.use(function(info, next) {
    info.msg += ' World';
    next();
});

middleware.use(function(info, next) {
    info.msg += ' !!!';
    next();
});

// Run the middleware with initial value
middleware.run({msg: 'Hello'});