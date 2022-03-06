const express = require("express");
const path = require("path");
var cors = require("cors");

const startMongoDbConnection = require("./db");
const app = express();

const dotenv = require("dotenv");
const port = 5000;

const userRoute = require("./routes/authenticateUser.js");
const taxDetialsRoute = require("./routes/taxUser.js");

dotenv.config();
startMongoDbConnection(); //just printing wether connected to database or not

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoute);
app.use("/api/user", taxDetialsRoute);

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(process.env.PORT, () => {
	console.log(`Live on port ${port}`);
});
