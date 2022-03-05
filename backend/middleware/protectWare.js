var jwt = require("jsonwebtoken");

const protection = (req, res, next) => {
	const token = req.header("token");
	if (!token) {
		res.status(401).send({ error: "requires valid user token" });
	}

	try {
		const data = jwt.verify(token, process.env.JWT_SECRET);
		req.user = data.user;
		next();
	} catch (e) {
		res.status(401).send({ error: "Server Error" });
	}
};

module.exports = protection;
