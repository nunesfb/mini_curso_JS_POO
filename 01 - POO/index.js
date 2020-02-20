class NomeClasse {
    nomeMetodo(){
        //this.atributo = 'Valor para o atributo';
        return this.atributo;
    }

    nomeOutroMetodo(primeiroParametro, segundoParametro){
        this.primeiroAtributo = primeiroParametro;
        this.segundoAtributo = segundoParametro;
        return `Valor do Primeiro Atributo: ${this.primeiroAtributo} e
        Valor do Segundo Atributo: ${this.segundoAtributo}`;
    }
}

const nomeObjeto = new NomeClasse();
nomeObjeto.atributo = "Teste";
console.log(nomeObjeto.atributo);
console.log(nomeObjeto.nomeMetodo());
console.log(nomeObjeto.nomeOutroMetodo("A", "B"));
