const restify = require("restify");
const config = require("./config/config");
const db_setup = require("./config/db_setup");

const server = restify.createServer();

// Middleware
server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {
  db_setup(server);
  console.log(`Server started on port ${config.PORT}`);
});
