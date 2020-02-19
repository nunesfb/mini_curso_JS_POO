//npm install -g typescript
//tsc index.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Cobra = /** @class */ (function (_super) {
    __extends(Cobra, _super);
    function Cobra(_nome) {
        return _super.call(this, _nome) || this;
    }
    Cobra.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 5; }
        console.log("Rastejando... ");
        _super.prototype.mover.call(this, distancia);
    };
    return Cobra;
}(Animal));
var cobra = new Cobra("Serpente");
cobra.mover(15);
var Cavalo = /** @class */ (function (_super) {
    __extends(Cavalo, _super);
    function Cavalo(_nome) {
        return _super.call(this, _nome) || this;
    }
    Cavalo.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 45; }
        console.log("Galopando...");
        _super.prototype.mover.call(this, distancia);
    };
    return Cavalo;
}(Animal));
var cavalo = new Cavalo("Corredor");
cavalo.mover(60);
