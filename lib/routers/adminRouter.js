const path = require('path');

const Router = require('koa-router');
const router = new Router();

// TODO: router.post('/pens');
// TODO: router.get('/pens');
// TODO: router.get('/pens/:id');
// TODO: router.delete('/pens/:id');
// TODO: router.put('/pen/:id');

router.get('*', async (cxt, next) => {
  console.log(cxt);
  await next(); 
  console.log(cxt);
}, require('koa-static')(path.join(__dirname, '../../static_admin')));

module.exports = router;
