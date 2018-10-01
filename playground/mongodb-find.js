const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect Mongo Server!')
	}

	console.log('Connected to Mongo Server..');
	const db = client.db('TodoApp');

	// db.collection('Todos')
	// 	.find({
	// 		_id: new ObjectID('5bb206150709913fe9e5cb30')
	// 	})
	// 	.toArray()
	// 	.then((docs) => {
	// 		console.log('Todos:: ')
	// 		console.log(JSON.stringify(docs, undefined, 4))
	// 	}, (err) => {
	// 		console.log(`Unable to fetch Error: ${err}`)
	// 	})


	// db.collection('Todos')
	// 	.find()
	// 	.count()
	// 	.then((count) => {
	// 		console.log(`Todos Counts: ${count}`);
	// 	}, (err) => {
	// 		console.log(`Unable to fetch Error: ${err}`)
	// 	})

	db.collection('Users')
		.find({name: 'Muhammed Alaa'})
		.toArray()
		.then((docs) => {
			console.log('The Group is: ');
			console.log(JSON.stringify(docs, undefined, 4));
		}, (err) => {
			console.log(`Unable to fetch names: ${err}`);
		})

	client.close();
});





















