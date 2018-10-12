// Library import
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');  // send json to server : server take json and do some, parse the body take string and change to js object.
const {ObjectID} = require('mongodb');

// Local importcd 
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./model/todo');
const {User} = require('./model/user');
const {authenticate} = require('./middleware/authenticate');



const app = express();
app.use(bodyParser.json())

// crud operation (create resource)
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

app.get('/todos', (req, res) => {
	Todo.find()
		.then((todos) => {
			res.send({todos});
		})
		.catch((e) => {
			res.status(400).send(e)
		})
})

app.get('/todos/:id', (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send()
	}

	Todo.findById(id)
		.then((todo) => {
			if (!todo) {
				return res.status(404).send()
			}

			res.send({todo});
		})
		.catch((err) => {
			res.status(400).send();
		})
})

app.delete('/todos/:id', (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id)
		.then((todo) => {
			if (!todo) {
				return res.status(404).send();
			}

			res.send(todo);
		})
		.catch((err) => {
			res.status(400).send();
		})
})

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
  	.then((todo) => {
	    if (!todo) {
	      return res.status(404).send();
	    }

	    res.send({todo});
	  }).catch((e) => {
	    res.status(400).send();
	  })
	});

/*Here is the Users*/

app.post('/users', (req, res) => {
	let body = _.pick(req.body, ['email', 'password']);
	let user = new User(body);

	user.save()
		.then(() => {
			return user.generateAuthToken();
		})
		.then((token) => {
			res.header('x-auth', token).send(user)
		})
		.catch((e) => {
			res.status(400).send(e);
		})
})


app.get('/users/me', authenticate, (req, res) => {
	res.send(req.user);
})


app.post('/users/login', (req, res) => {
	const body = _.pick(req.body, ['email', 'password']);

	User.findByCredentials(body.email, body.password)
		.then((user) => {
			return user.generateAuthToken()
				.then((token) => {
					res.header('x-auth', token).send(user);
				})
		})
		.catch((e) => {
			res.status(400).send();
		})
})








const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Starting Up At ${port}`);
})


module.exports = {app};













// Path on Terminal >>>>    C:\Program Files\MongoDB\Server\4.0\bin>mongod.exe --dbpath /Users/Muhammed/mongo-data
