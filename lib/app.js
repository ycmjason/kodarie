const path = require('path');

const Koa = require('koa');
const Router = require('koa-router');

const configs = require('./configs');
const basicAuth = require('./middlewares/basicAuth');
const adminRouter = require('./routers/adminRouter');
// const sendFile = require('./middlewares/sendFile')(path.join(__dirname, '../static'));

const app = new Koa();
const router = new Router();

router.get('/admin', basicAuth(configs.AUTH), adminRouter.routes(), adminRouter.allowedMethods());

router.get('*', require('koa-static')(path.join(__dirname, './static')));

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
