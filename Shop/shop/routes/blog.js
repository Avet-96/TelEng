const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const Blog = require('../models/Blog');


router.post('/add-comet', async (req, res, next) => {
	try {
		const {description, token, email} = req.body;
		let isToken = Users.findOne({where: {token: Users.userToken(email) === token}});
		if (!isToken) {
			res.json({
				status: 'Error',
				message: 'you can not leave a comment'
			});
			return
		}
		let comment = await Blog.create({description});
		let user = await Users.findOne({where: {email}});
		res.json({
			status: 'Ok',
			comment,
			user
		})
	} catch (e) {
		next(e)
	}
});
router.delete('/destroy-comment', async (req, res, next) => {
	try {
		const {id} = req.body;
		let del = await Blog.destroy({where: id});
		res.json({
			status:'Destroy',
			del
		})
	} catch (e) {
		next(e)
	}
});

module.exports = router;
