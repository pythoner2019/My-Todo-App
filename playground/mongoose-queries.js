const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');


const id = '5bb4afe02d5fdc1150632b9a';


/*

const id = '5bb4afe02d5fdc1150632b9a';

if (!ObjectID.isValid(id)) {
	console.log('ID not valid')
}

*/


/* 
// 1
Todo.find({ _id: id })
	.then((todos) => {
		console.log(`Todos are : ${todos}`);
	})

// 2
Todo.findOne({ _id: id })
	.then((todo) => {
		console.log(`Todo is ${todo}`);
	})

*/

// 3
 
Todo.findById(id)
	.then((todo) => {
		if (!todo) {
			return console.log('Id not found!');
		}

		console.log(`Todo By Id: ${todo}`);
	})
	.catch((e) => {
		console.log(e)
	})


// ---------------------------------- ex ---------------------------//

User.findById('5bb37e3222d19a195c2e0580')
	.then((user) => {
		if (!user) {
			return console.log('Unable To Find User')
		}

		console.log(JSON.stringify(user, undefined, 4));
	})
	.catch((e) => {
		console.log(e)
	})

if (!ObjectID.isValid('5bb37e3222d19a195c2e0580')) {
	console.log('ID not valid')
}
