class Animal {
  constructor(name) {
    this._name = name
  }

  getName() {
    return this._name
  }

  setName(name) {
    this._name = name
  }
}

const animal = new Animal('dog')
console.log(animal.getName()) // dog
animal.setName('cat')
console.log(animal.getName()) // cat


