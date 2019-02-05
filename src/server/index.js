const Koa = require('koa');
const cors = require('@koa/cors');
const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/movies');

const app = new Koa();
app.use(cors());
const PORT = process.env.PORT || 1337;

app.use(indexRoutes.routes());
app.use(movieRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
