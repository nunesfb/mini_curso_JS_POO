//https://pt.stackoverflow.com/questions/141645/javascript-%C3%A9-uma-linguagem-orientada-a-objetos/141653

/*/////////////////////////////////////////////////////////////////////////////////////
//USO DE FUNÇÕES SIMILAR A CLASSE
function Animal(_nome) {
    this.Nome = _nome;
    }

    	
Animal = new Animal("Felipe");
console.log(Animal.Nome);
/////////////////////////////////////////////////////////////////////////////////////*/


/*/////////////////////////////////////////////////////////////////////////////////////
//USANDO OBJETOS LITERAIS

var carro = {
marca: "Ford",
modelo: "Ka",
getDetalhes: function () {
return this.marca + ' - ' + this.modelo;
    }
}
carro.modelo = "Novo Ka";
console.log(carro.getDetalhes());
/////////////////////////////////////////////////////////////////////////////////////*/


/*
Polimorfismo é quando queremos que os filhos se comportem diferente 
dos seus pais, ou seja, temos os mesmo métodos, com os mesmos nomes 
mas com diferentes comportamentos.
*/

/*
var pai = { 
    getValor: function funcao(){ 
      return this.valor; 
    }, 
    valor:10 
  }; 
  function outraFuncao(){ 
    return this.valor + this.valor; 
  } 
  var filho = Object.create(pai); 
  filho.getValor = function outraFuncao(){ 
    return pai.getValor.call(this) + 5; 
  };
  filho.valor = 2; 
  console.log(pai.getValor()); //Continua retornando 10 
  console.log(filho.getValor()); //Retorna 7
*/


/*
Então nesse código temos objetos que estendem um protótipo que 
são conhecidas como instâncias, os próprios protótipos são conhecidos 
como classes, os protótipos que estendem outro são conhecidos 
como sub classe e os que são estendidos como super classe. 
Então em nosso exemplo acima temos, pai como classe e também super classe 
de paiPolimorfisado, temos filho1, filho2, filhoPolimorfisado1, 
filhoPolimorfisado2 como instâncias e paiPolimorfisado como classe 
e também sub classe.

O passo de criar uma instância e conhecido como instanciação, 
e existem dois passos para isso, primeiramente criamos o objeto estendendo 
o protótipo, como em var filho1 = Object.create(pai); e secundariamente 
temos a inicialização dos dados como em filho1.valor = 10;. 
Como pode ser observado em nosso exemplo o segundo passo se repete 
em todas as instanciações, ou seja, temos uma lógica duplicada, 
além de violar um conceito importante em orientação de objetos, 
o encapsulamento.

*/

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
