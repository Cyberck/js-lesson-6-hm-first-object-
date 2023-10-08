

const users = {}

for(let i = 1; i <= 3; i++) {
  let userName = prompt('Enter the name');
	let userAge = +prompt('Enter the age');
	users[i] = {
		name: userName,
		age: userAge
	}
}
for(let key in users) {
	console.log(`Polzovatel ${key}`);
	for(let newKey in users[key]) {
		console.log(newKey == 'name' ? `Your name ${users[key][newKey]}` : `Your age ${users[key][newKey]}`);
	}
}
console.log(users);