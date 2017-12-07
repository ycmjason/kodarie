const Koa = require('koa');
const Router = require('koa-router');
const auth = require('koa-basic-auth');

const config = require('./config');

const app = new Koa();
const router = new Router();

router.get('/', auth(config.auth), (cxt) => {
  cxt.response.status = 200;
  cxt.response.body = 'hello Jason from controller';
});

router.get('*', require('koa-static')('./static'));

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
