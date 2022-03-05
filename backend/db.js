const mongoose = require("mongoose");

// const mongoUrl = "mongodb://localhost:27017/taxcalculator?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () => {
	mongoose.connect(process.env.MONGO_URI, () => {
		console.log("Connected to Mongo successfully......");
	});
};

module.exports = connectToMongo;
