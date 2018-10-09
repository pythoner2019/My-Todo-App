const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');


// First :: remove all
/*
Todo.remove({})
	.then((result) => {
		console.log(result)
	})

*/


// 2nd :: findOneAndRemove({_id: ''}).then().catch() >>> will remove but still have the removed one and can show it
/*
findOneAndRemove({_id: ''})
	.then((result) => {
		console.log(result)
	})
*/


// 3rd :: findByIdAndRemove('').then().catch() >>>  will remove but still have the removed one and can show it (better)

Todo.findByIdAndRemove('5bbcfcc5ab2abd738e6962a5')
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	})


