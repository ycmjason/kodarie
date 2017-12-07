const auth = require('koa-basic-auth');

module.exports = (auth_detail) => async (ctx, next) => {
  try {
    await auth(auth_detail)(ctx, next);
  } catch (err) {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.set('WWW-Authenticate', 'Basic');
      ctx.body = 'private area here :D';
    } else {
      throw err;
    }
  }
};
