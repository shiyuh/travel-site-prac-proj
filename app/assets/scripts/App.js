var $ = require('jquery');
// var Person = require('./modules/Person');
// ES6 way to import
import Person from './modules/Person';

class Adult extends Person {
  payTax(){
    console.log('tax paid by '+this.name);
  }
}

alert("ac");

var john = new Person("Shiyu", "orange");
john.greet()

var jane = new Adult("Shiyu2", "orange");
jane.greet()
jane.payTax()
