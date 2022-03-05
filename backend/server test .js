const express = require("express");
const bodyParser = require("body-parser");

const dummyData = require("./data/data");
const taxHistroyRoute = require("./routes/tax-history-route");

const app = express();

app.get("/", (req, res) => {
	res.json(dummyData);
});

app.use("/api/user", taxHistroyRoute);

app.listen(5000, console.log("server running on port 5000"));
