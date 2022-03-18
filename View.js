const Model = require('./Model');
const Controller = require('./Controller')


class View {
  #model;

  constructor(model) {
    this.#model = model;
  
  }


writeStartQuestions (txt){
  console.log(txt);
}

writeQuestions (txt){
  console.log(txt);
}


writeWrong(err){
  console.log('Ошибка!!!');
}


writeScore(score){

  console.log(`Ваш счет ${score}`);

}

writeGood(){
  console.log('U+1F44D');
}


}






module.exports = View;
