// define a classe Animal
function Animal() {}

//Um protótipo nos permite predefinir propriedades, incluindo métodos
Animal.prototype.andar = function(){
  console.log ('Estou andando!');
};
Animal.prototype.dormir = function(){
  console.log ('Estou dormindo!');
};

///////////////////////////////////////////////////////////////////////////////////

function Cachorro() {
  // Chama o método parente
  Animal.call(this);
}
 
// herda de Animal
Cachorro.prototype = new Animal();

// corrigir o ponteiro construtor porque aponta para Animal
Cachorro.prototype.constructor = Cachorro;

// adiciona o método dizOi
Cachorro.prototype.andar = function(){
  console.log('Oi, eu sou Cachorro e estou andando');
}

// adiciona o método dizTchau 
Cachorro.prototype.latir = function(){
  console.log('Au au');
}

var animal = new Animal();
animal.andar();
animal.dormir();

var cachorro = new Cachorro();
cachorro.andar();
cachorro.dormir();
cachorro.latir();

/////////////////////////////////////////////////////////////////////////////

function Gato() {
  // Chama o método parente
  Animal.call(this);
}
 
// herda de Animal
Gato.prototype = new Animal();

// corrigir o ponteiro construtor porque aponta para Animal
Gato.prototype.constructor = Gato;

// adiciona o método dizOi
Gato.prototype.andar = function(){
  console.log('Oi, eu sou Gato e estou andando');
}

// adiciona o método dizTchau 
Gato.prototype.miar = function(){
  console.log('Miau');
}

var animal = new Animal();
animal.andar();
animal.dormir();

var gato = new Gato();
gato.andar();
gato.dormir();
gato.miar();
