const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect Mongo Server!')
	}

	console.log('Connected to Mongo Server..');
	const db = client.db('TodoApp');

	// db.collection('Todos')
	// 	.findOneAndUpdate({
	// 		_id: new ObjectID('5bb215b00709913fe9e5cd5c')
	// 	}, {
	// 		$set: {
	// 			text: 'Fuck love',
	// 			completed: true
	// 		}
	// 	}, {
	// 		returnOriginal: false
	// 	})
	// 	.then((result) => {
	// 		console.log(JSON.stringify(result, undefined, 4));
	// 	})

	// db.collection('Todos')
	// 	.findOneAndUpdate({
	// 		_id: new ObjectID('5bb234570709913fe9e5d028')
	// 	}, {
	// 		$set: {
	// 			text: 'Hard sleep on',
	// 			completed: false
	// 		}
	// 	}, {
	// 		returnOriginal: false
	// 	})
	// 	.then((result) => {
	// 		console.log(JSON.stringify(result, undefined, 4))
	// 	})


	db.collection('Users')
		.findOneAndUpdate({
			_id: new ObjectID('5bb1f8b06d87941348b5a3a1')
		}, {
			$set: {
				name: 'Muhammed Alaa'
			},
			$inc: {
				age: 1
			}
		}, {
			returnOriginal: false
		})
		.then((result) => {
			console.log(JSON.stringify(result, undefined, 4));
		})

	// client.close();
});





















