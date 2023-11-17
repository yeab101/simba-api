const Route = require("express");
const route = Route();

route.get("/", (req, res) => {
  console.log("Hello from timer");
});

module.exports = route;
