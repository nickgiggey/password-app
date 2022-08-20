//===== CONTROLLER.js =========
//------- import express -------
const express = require('express');

//------- import router -------
const router = express.Router();

//------- import model -------
const Initiate = require('../models/Initiate');

//------- router functions -------

//(.get , .post , .put , .patch , .delete)
router.get('/', (req, res, next) => {
	Initiate.find({})
		.populate({
			path: 'roominfo',
			model: 'Room',
		})
		.then((initiates) => res.json(initiates))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Initiate.findById(req.params.id)
		.populate({
			path: 'roominfo',
			model: 'Room',
		})
		.then((initiates) => res.json(initiates))
		.catch(next);
});

router.post('/', (req, res, next) => {
	Initiate.create(req.body)
		.then((initiates) => res.json(initiates))
		.catch(next);
});

router.patch('/:id', (req, res, next) => {
	Initiate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.populate({
			path: 'roominfo',
			model: 'Room',
		})
		.then((initiate) => res.json(initiate))
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	Initiate.findOneAndDelete({ _id: req.params.id })
		.then((initiate) => res.json(initiate))
		.catch(next);
});

//------- export router ------

module.exports = router;
