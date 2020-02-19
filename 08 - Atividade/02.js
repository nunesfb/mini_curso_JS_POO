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

class Funcionario extends Pessoa{
    constructor (nome, salarioBruto) {
        super(nome);
        this.salarioBruto = salarioBruto;
    }
    setSalarioBruto(salarioBruto){
        this.salarioBruto = salarioBruto;
    };

    getSalarioBruto(){
        return this.salarioBruto;
    };
    calculaSalarioLiquido () {
        const salarioLiquido = this.salarioBruto - (this.salarioBruto * 0.13);
        return `${this.nome} tem um salário líquido de ${salarioLiquido}`;
    }
}

const funcionario = new Funcionario("Maria", 1300);
console.log(funcionario.calculaSalarioLiquido());
