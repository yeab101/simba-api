const Route = require("express");
const route = Route();

let num = [];
for (let i = 1; i <= 30; i++) {
  num.push(i);
}

route.get("/", (req, res) => {
  console.log("Hello from the game");
  res.send(num);
});

module.exports = route;
