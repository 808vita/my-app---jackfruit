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
app.use(express.json()); //middleware. compulsory

//Available Routes //if we go on /api/auth this point then we will get the info which providing in ./routes/auth.js location
// same for notes part
app.use("/api/auth", userRoute);
app.use("/api/user", taxDetialsRoute);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/build")));

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
	);
} else {
	app.get("/", (req, res) => {
		res.send("api is running");
	});
}

app.listen(port, () => {
	console.log(`Live on port ${port}`);
});
