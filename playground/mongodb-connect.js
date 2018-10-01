// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect Mongo Server!')
	}

	console.log('Connected to Mongo Server..');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed: false
	// }, (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert todo', error);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// });

	db.collection('Users').insertOne({
		name: 'Muhammed Alaa',
		age: 28,
		location: 'Ismailia'
	}, (error, result) => {
		if (error) {
			return console.log('unable to insert todo')
		}
		console.log(JSON.stringify(result.ops, undefined, 4));
	})

	client.close();
});









		// console.log(result.ops[0]._id.getTimestamp())

















