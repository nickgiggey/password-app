//===== MODEL.JS =========

//------- import mongoose -------
const mongoose = require('../db/connection.js');

//------- create schema function -------
const InitiateSchema = new mongoose.Schema({
	name: String,
	email: String,
	partySize: Number,
	roominfo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Room',
	},
});

//------- instantiate the model w/ schema -------
const Initiate = mongoose.model('Initiate', InitiateSchema);

//------- export model -------
module.exports = Initiate;
