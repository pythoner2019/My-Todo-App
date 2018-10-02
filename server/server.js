const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./model/todo');
const {User} = require('./model/user');


app.use(bodyParser.json())


app.post('/todos', (req, res) => {
	const todo = new Todo({
		text: req.body.text
	});

	todo.save()
		.then((doc) => {
			res.send(doc);
		})
		.catch((err) => {
			res.status(400).send(err);
		})
})


app.listen(3000, () => {
	console.log('started on port 3000');
})














