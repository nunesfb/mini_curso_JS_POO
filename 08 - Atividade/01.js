class Pessoa {
    constructor(nome, peso, altura) {
        this._nome = nome;
        this._peso = peso;
        this._altura = altura;
    }
    set nome(nome) { 
        this._peso = nome;
    }
    get nome() { 
        return this._nome; 
    }
    set peso(peso) { 
        this._peso = peso; 
    }
    get peso() { 
        return this._peso; 
    }
    set altura(altura) { 
        this._altura = altura; 
    }
    get altura() { 
        return this._altura; 
    }
    imc() { 
        const result = this._peso / (this._altura * this._altura);
        return `Felipe tem um IMC de ${Math.round(result)}`; 
    }
}
var pessoa = new Pessoa("Felipe", 82.5, 1.89)
console.log(pessoa.imc());