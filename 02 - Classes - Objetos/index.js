
class Pessoa{
    imprimir(nome, idade){
        this.nome = nome;
        this.idade = idade;
        return `${this.nome} tem ${this.idade} anos`;
    }
    imc(peso, altura){
        this.peso = peso;
        this.altura = altura;
        return "IMC: " + this.peso / (this.altura * this.altura);
    }
}

const pessoa = new Pessoa();
console.log(pessoa.imprimir("Felipe", 29));
console.log(pessoa.imc(82.5, 1.87));



class Caixa{
    depositar(valor){
        this.saldo += valor;
        return `Depositou: R$ ${valor}`;
    };
    mostrarSaldo(){
        return `Saldo: ${this.saldo}`;
    };
}
const caixa = new Caixa();
caixa.saldo = 100;
console.log(caixa.mostrarSaldo());
console.log(caixa.depositar(300));
console.log(caixa.mostrarSaldo());

