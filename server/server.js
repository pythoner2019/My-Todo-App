const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });


const Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
})


const newTodo = new Todo({
	text: 'PLay with children'
})


newTodo.save()
	.then((docs) => {
		console.log(JSON.stringify(docs, undefined, 4))
	})
	.catch((err) => {
		console.log('unable to fetch', err)
	})

/*Add another Todo*/

const anotherTodo = new Todo({
	text: 'drink water and sleep',
	completed: true,
	completedAt: 123
})

anotherTodo.save()
	.then((docs) => {
		console.log(JSON.stringify(docs, undefined, 4))
	})
	.catch((err) => {
		console.log('unable to get', err)
	})





















