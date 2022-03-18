const fs = require('fs');



class Model {
	#topic
	constructor() {
	}
	getNameOfTopic() {
		const topic = fs.readdirSync('./topics').join(',')
		let text = '';
		let reg = /\.txt,/g;
		let top = topic.replace(reg, ' ').replace(/\.txt/, '').split(' ')
		for (let i = 0; i < top.length; i++) {
			text += `${i + 1}. ${top[i]} \n`;
		}
		return text;
	}
	setTopic(num) {
		if (num === 1) this.#topic = './topics/country.txt';
		if (num === 2) this.#topic = './topics/elbrus.txt';
		if (num === 3) this.#topic = './topics/geography.txt';
	}
	readFile(num) {
		const text = String(fs.readFileSync(this.#topic));
		console.log(text);
		const array = text.split('\n');
		//console.log(array)
		return new Question(array[num * 3], array[num * 3 + 1])
	}
}

class Question {
	constructor(question, answer) {
		this.question = question;
		this.answer = answer;
	}
}

// const newUser = new Model();
// newUser.setTopic(1);
// newUser.readFile(2);

module.exports = { Model, Question }
