const app = require('./lib/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Server listening on ${PORT}...`);
});
