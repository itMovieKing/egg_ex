// app/middleware/robot.js
// options === app.config.robot
module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    console.log('---------------------------------- ua start ---------------------------------- ')
    console.log('option', options, app.config)
    console.log('----------------------------------  ua end ----------------------------------') 
    const match = options.ua?.some((ua) => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    } else {
      await next();
    }
  };
};
