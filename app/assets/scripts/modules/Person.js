class Person{
  constructor(name, color) {
    this.name = name;
    this.favColor = color;

  }

  greet() {
    console.log("Hola!! Name: " + this.name);
  }
}

// module.exports = Person; 
// ES6 way to export
export default Person