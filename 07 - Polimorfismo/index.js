class Animal {
    
    constructor(nome) { this._nome = nome; }
    mover(distancia) {
        console.log(`${this._nome} se moveu ${distancia} metros.`);
    }
}

const animal = new Animal("Cachorro");
animal.mover(50);

animal._nome = "Gato";
animal.mover(50);


class Cobra extends Animal {
    constructor(_nome) { super(_nome); }
    mover(distancia = 5) {
        console.log("Rastejando... ");
        super.mover(distancia);
    }
}

const cobra = new Cobra ("Serpente");
cobra.mover(15);

class Cavalo extends Animal {
    constructor(_nome) { super(_nome); }
    mover(distancia = 45) {
        console.log("Galopando...");
        super.mover(distancia);
    }
}

const cavalo = new Cavalo ("Corredor");
cavalo.mover(60);