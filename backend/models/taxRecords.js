const mongoose = require("mongoose");
const { Schema } = mongoose;

const taxRecordSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},

	bas: {
		type: Number,
		required: true,
	},
	lta: {
		type: Number,
		required: true,
	},
	hra: {
		type: Number,
		required: true,
	},
	fa: {
		type: Number,
		required: true,
	},
	inv: {
		type: Number,
		required: true,
	},
	med: {
		type: Number,
		required: true,
	},
	rent: {
		type: Number,
		required: true,
	},
	metro: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model("records", taxRecordSchema);
