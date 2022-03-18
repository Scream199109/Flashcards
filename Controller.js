const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const Model = require("./Model");
const View = require("./View");
const {Model, Question} = require("./View");

let n = 0;
let length = 0;

class Controller {
  #model;
  #view;

  constructor() {
    this.#model = new Model();
    this.#view = new View();
    
  }

  run() {
    const txt1 = this.#view.writeStartQuestions(this.#model.getNameOfTopic());
    rl.question(txt1, (answer) => {
      const arrBuf = txt1.splice('\n');
      length = arrBuf.length;
      this.print();
    });
  }

  print() {
    // Тут нужно попросить экземпляр класса view вывести меню пользователю, 
    // а также дождаться ответа последнего
    if (n < length) {
    const currentObject = this.#model.readFile(n);
    const show = this.#view.writeQuestions(currentObject.question);
    rl.question(show, (answer) => {
      if (answer === currentObject.answer) {
        this.#view.writeGood();
        n+=1;
        this.print();
      }  else {
        this.#view.writeWrong();
        const score = (n / length) * 100;
        this.#view.writeScore(score);
        rl.close();
      }
      
    });
    }
  }

  
}

module.exports = Controller;
