const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect Mongo Server!')
	}

	console.log('Connected to Mongo Server..');
	const db = client.db('TodoApp');


									/*Delete Many*/
	db.collection('Todos')
		.deleteMany({text: 'eat lunch'})
		.then((result) => {
			console.log(result);
		})

									/*Delete One*/
	db.collection('Todos')
		.deleteOne({text: 'play'})
		.then((result) => {
			console.log(result);
		})

									/*Find One And Delete*/
	db.collection('Todos')
		.findOneAndDelete({completed: false})
		.then((result) => {
			console.log(result);
		})


									/*Delete many in Users collection*/
	db.collection('Users')
		.deleteMany({name: 'Muhammed Alaa'})


									/*Find One And Delete In Users Collection*/
	db.collection('Users')
		.findOneAndDelete({_id: new ObjectID('5bb20357bb057a136cdba72b')})
		.then((result) => {
			console.log(JSON.stringify(result, undefined, 4));
		})


	client.close();
});





















