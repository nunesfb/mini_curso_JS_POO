//npm install -g typescript
//tsc index.ts

class Animal {
    private teste: string;
    _nome: string;
    constructor(nome: string) { this._nome = nome; }
    mover(distancia: number = 0) {
        console.log(`${this._nome} se moveu ${distancia} metros.`);
    }
}

const animal = new Animal("Cachorro");
animal.mover(50);

animal._nome = "Gato";
animal.mover(50);

//animal.teste = "teste";

class Cobra extends Animal {
    constructor(_nome: string) { super(_nome); }
    mover(distancia = 5) {
        console.log("Rastejando... ");
        super.mover(distancia);
    }
}

const cobra = new Cobra ("Serpente");
cobra.mover(15);

class Cavalo extends Animal {
    constructor(_nome: string) { super(_nome); }
    mover(distancia = 45) {
        console.log("Galopando...");
        super.mover(distancia);
    }
}

const cavalo = new Cavalo ("Corredor");
cavalo.mover(60);