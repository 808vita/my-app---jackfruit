const express = require("express");
const dummyData = require("../data/data");

const router = express.Router();

router.get("/:userId", (req, res, next) => {
	const userId = req.params.userId;
	const userMatch = dummyData.find((data) => data.userId == userId);
	res.json(userMatch);
});

router.get("/tax-reports", (req, res, next) => {
	console.log("all tax reports");
	const allData = dummyData;
	res.json(allData);
});

router.get("/tax-reports/:id", (req, res, next) => {
	console.log("using router");
	const singleData = dummyData.find((data) => data.id == req.params.id);
	res.json(singleData);
});

module.exports = router;
