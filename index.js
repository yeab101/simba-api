const express = require("express");
const timerRoute = require("./src/timer");
const gameRoute = require("./src/games");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/timer", timerRoute);
app.use("/game", gameRoute);

app.listen(PORT, () => console.log(`YOUR SERVER IS RUNNING ON PORT ${PORT}`));
