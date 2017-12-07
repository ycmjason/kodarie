const path = require('path');

const send = require('koa-send');

module.exports = (root) => (file) => async (ctx) => {
  await send(ctx, file, { root: path.join(__dirname, '../../', root) });
};
