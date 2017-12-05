const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/ecd', (cxt) => {
  cxt.response.status = 200;
  cxt.response.body = 'hello world from controller';
});

router.get('*', require('koa-static')('./static'));

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
