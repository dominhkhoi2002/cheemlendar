const userRouter = require('./users');
function route(app) {
  // app.use('/', userRouter);
  app.use('/api/', userRouter);
}

module.exports = route;
