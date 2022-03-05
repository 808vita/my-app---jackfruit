const { Router } = require("express");
const express = require("express");
const app = express();
const router = express.Router();

const User = require("../models/users.js"); //schema part
const TaxRecords = require("../models/taxRecords"); //schema part

const protection = require("../middleware/protectWare"); //from this middleware we will receieving user
const { body, validationResult } = require("express-validator");

//Route 1 : this end point POST "/api/notes/addnote" . Here we will add user tax details
router.post(
	"/tax-filing",
	protection,
	[
		body("bas", "Invalid bas").isNumeric(),
		body("lta", "Invalid lta").isNumeric(),
		body("hra", "Invalid hra").isNumeric(),
		body("fa", "Invalid fa").isNumeric(),
		body("inv", "Invalid inv").isNumeric(),
		body("med", "Invalid med").isNumeric(),
		body("rent", "Invalid med").isNumeric(),
		body("metro", "Invalid med").isBoolean(),
	],
	async (req, res) => {
		//if there are errors then return bad requests and the errors
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const { bas, lta, hra, fa, inv, med, rent, metro } = req.body; //taking user filled data

			const tax = new TaxRecords({
				bas,
				lta,
				hra,
				fa,
				inv,
				med,
				user: req.user.id,
				rent,
				metro, //adding user filled data in database. 4 filled will be added
			});
			const savedNote = await tax.save(); //saving to database
			res.json(savedNote);
		} catch (e) {
			console.log(e);
			res.status(500).send("Some error occured");
		}
	}
);

//Get logged in user details using POST "api/auth/getuser". Login required
router.get("/profile", protection, async (req, res) => {
	try {
		const userId = req.user.id;

		const user = await User.findById(userId).select("-password"); //then here we will fetch "that user all data from mongo db expecpt password by the help of id"

		res.send(user);
	} catch (e) {
		console.log(e);
		res.status(500).send("Internal Server Occured");
	}
});

//get all records matching a user. Login required
router.get("/records", protection, async (req, res) => {
	try {
		const userId = req.user.id;

		const userRecords = await TaxRecords.find({ user: userId }); //then here we will fetch "that user all data from mongo db expecpt password by the help of id"

		res.send(userRecords);
	} catch (e) {
		console.log(e);
		res.status(500).send("Internal Server Occured");
	}
});

//get a record. Login required
router.get("/record/:recordId", protection, async (req, res) => {
	try {
		const userId = req.user.id;
		const recordId = req.params.recordId;
		console.log(recordId);

		const userRecord = await TaxRecords.find({ user: userId, _id: recordId }); //then here we will fetch "that user all data from mongo db expecpt password by the help of id"

		res.send(userRecord);
	} catch (e) {
		console.log(e);
		res.status(500).send("Internal Server Occured");
	}
});

//delete a record. Login required
router.delete("/record/:recordId", protection, async (req, res) => {
	try {
		const userId = req.user.id;
		const recordId = req.params.recordId;
		console.log(recordId);

		const userRecord = await TaxRecords.findOneAndDelete({
			user: userId,
			_id: recordId,
		}); //then here we will fetch "that user all data from mongo db expecpt password by the help of id"

		res.send("Tax record deleted");
	} catch (e) {
		console.log(e);
		res.status(500).send("Internal Server Occured");
	}
});

//update a record. Login required
router.put(
	"/record/:recordId",
	protection,
	[
		body("bas", "Invalid bas").isNumeric(),
		body("lta", "Invalid lta").isNumeric(),
		body("hra", "Invalid hra").isNumeric(),
		body("fa", "Invalid fa").isNumeric(),
		body("inv", "Invalid inv").isNumeric(),
		body("med", "Invalid med").isNumeric(),
		body("rent", "Invalid med").isNumeric(),
		body("metro", "Invalid med").isBoolean(),
	],
	async (req, res) => {
		//if there are errors then return bad requests and the errors
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const userId = req.user.id;
			const recordId = req.params.recordId;
			console.log(recordId);
			const newRecordData = req.body;

			const userUpdatedRecord = await TaxRecords.findOneAndUpdate(
				{
					user: userId,
					_id: recordId,
				},
				newRecordData
			); //then here we will fetch "that user all data from mongo db expecpt password by the help of id"

			res.send(userUpdatedRecord);
		} catch (e) {
			console.log(e);
			res.status(500).send("Internal Server Occured");
		}
	}
);

module.exports = router;
