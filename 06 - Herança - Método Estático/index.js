
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


class Funcionario extends Pessoa{
    constructor (nome, idade, matricula, salarioBruto) {
        super(nome, idade);
        this.matricula  = matricula;
        this.salarioBruto = salarioBruto;
    }
    setMatricula(matricula){
        this.matricula = matricula;
    };

    getMatricula(){
        return this.matricula;
    };
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

const funcionario = new Funcionario("Maria", 29, 12345, 1300);
console.log(funcionario.idade);
console.log(funcionario.matricula);
console.log(funcionario.calculaSalarioLiquido());

funcionario.setIdade(35);
funcionario.setMatricula(987);
funcionario.setNome("João");
funcionario.setSalarioBruto(1000);

console.log(funcionario.getIdade());
console.log(funcionario.getMatricula());
console.log(funcionario.calculaSalarioLiquido());

