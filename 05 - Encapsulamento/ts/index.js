//npm install -g typescript
//tsc index.ts
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this._nome = nome;
    }
    Animal.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log(this._nome + " se moveu " + distancia + " metros.");
    };
    return Animal;
}());
var animal = new Animal("Cachorro");
animal.mover(50);
animal._nome = "Gato";
animal.mover(50);
//animal.teste = "teste";
