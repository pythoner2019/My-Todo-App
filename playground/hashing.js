const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



const password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	})
// })


const hashedPassword = '$2a$10$CZHhxK9jwFFR4/HZVM.dzuc5cYL4FJ1PxC/5nh6WXqa8i1IHE06Xa';



bcrypt.compare(password, hashedPassword, (err, res) => {
	console.log(res);
})















// just do 2 functions : 1 to create token and other for verify it
// jwt.sign()      jwt.verify()

// const data = {
// 	id: 10
// };


// // create Token: with secret 123abc:
// const token = jwt.sign(data, '123abc');
// console.log(token);

// // Now Verify:  with same secret (must) 123abc:
// const decoded = jwt.verify(token, '123abc');
// console.log('decoded: ', decoded)

/*--------------------------------------------------------------------*/

/*     nice leeson
const {SHA256} = require('crypto-js');

const message = "I am use number 6";
const hash = SHA256(message).toString();



console.log(`message: ${message}`)
console.log(`Hash: ${hash}`);


const data = {
	id: 9
};

const token = {
	data,
	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

// token.data.id = 4;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if(resultHash === token.hash) {
	console.log('Data was not changed')
} else {
	console.log('Data was changed do not trust!!')	
}
*/





