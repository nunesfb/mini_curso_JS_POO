
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    setNome(nome){
        this.nome = nome;
    };

    getNome(){
        return this.nome;
    };
    setIdade(idade){
        this.idade = idade;
    };

    getIdade(){
        return this.idade;
    };
    setPeso(peso){
        this.peso = peso;
    };

    getPeso(){
        return this.peso;
    };
    setAltura(altura){
        this.altura = altura;
    };

    getAltura(){
        return this.altura;
    };
    imprimir(){
        return `${this.nome} tem ${this.idade} anos`;
    }
    imc(){
        return "IMC: " + this.peso / (this.altura * this.altura);
    }
}

const pessoa = new Pessoa("Teste", 32);
console.log(pessoa.getNome());
console.log(pessoa.getIdade());

pessoa.setNome("Felipe");
pessoa.setIdade(30);
console.log(pessoa.imprimir());

pessoa.setPeso(82.5);
pessoa.setAltura(1.87);
console.log(pessoa.imc());



class Caixa{
    constructor(codigo, saldo){
        this.codigo = codigo;
        this.saldo = saldo;
    }

    setCodigo(codigo){
        this.codigo = codigo;
    };

    getCodigo(){
        return this.codigo;
    };

    setSaldo(saldo){
        this.saldo = saldo;
    };

    getSaldo(){
        return this.saldo;
    };

    depositar(valor){
        this.saldo += valor;
        return `Depositou: R$ ${valor}`;
    };
    mostrarSaldo(){
        return `Saldo: ${this.saldo}`;
    };
}
const caixa = new Caixa(1, 100);
console.log(caixa.mostrarSaldo());
caixa.setSaldo(400);
console.log(caixa.getSaldo());
console.log(caixa.depositar(300));
console.log(caixa.mostrarSaldo());

