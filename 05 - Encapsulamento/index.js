/*
O método constructor tem como tarefa fazer a inicialização da instância. 
Ele é chamado automaticamente na criação da mesma e garante que 
ela esteja em um estado válido.
*/

/*
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
  */

/*
Como getters e setters são muito comuns na utilização de classes, 
o ES6 veio com um syntax sugar para lidar com os mesmos. 
Então podemos reescrever o exemplo anterior dessa forma melhorada:
*/

/*
class Animal {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }
}

const animal = new Animal('dog')
console.log(animal.name) // dog
animal.name = 'cat'
console.log(animal.name) // cat
*/

/*
Lembrando que a principal função dos getters/setters é proteger
os dados internos das instâncias de um objeto.
Se você está se perguntando o porquê do underscore antes
da propriedade name, a resposta simples é de que isso é uma convenção
que indica que essa variável deve ser mantida privada.
*/