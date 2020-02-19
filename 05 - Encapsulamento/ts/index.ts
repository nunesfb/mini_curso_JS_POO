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
