const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const db = require("./db.json");

server.use(middlewares);
server.use(router);

server.listen(port);
