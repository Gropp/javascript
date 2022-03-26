// Exemplo de Orientacao a Objeto em JS

// criamos uma classe chamada de conta bancaria
// essa é a classe mais abstrata - generalista
// ela fara as operacoes basicas nas contas que serao herdadas pelas classes filhas

class ContaBancaria { 
    // invoca o construtor passando as variaveis/propiedade locais da classe
    // como o saldo sempre comeca zerado nao é preciso incluir no construtor
    constructor(agencia, numero, tipo) {
        // carrega as variaveis locais com os argumentos passados na chamada da classe
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        // para garantir que as propriedades nao serao acessadas diretamente por outras classes, sempre que temos um get/set para uma propriedade, nos pomos um _ na frente do nome da propriedade
        this._saldo = 0;
    }
    // criamos os metodos para manipular as propriedades da classe ContaBancaria
    // gets - pega / setters - recebe/altera/inclui
    // esses metodos sao responsaveis por proteger as propriedades das classes, nao deixar ninguem de fora mudar o conteudo dessas propriedades
    get saldo() {
        // esse metodo devolve o valor registrado na propiedade local _saldo
        return this._saldo;
    }

    set saldo(valor) {
        // esse metodo altera o conteudo da propriedade saldo para o valor enviado ao chamar o metodo
        this._saldo = valor;
    }

    // metodos sacar e depositar
    //  sempre as propriedades so podem ser alteradas dentro dos metodos do objeto.
    sacar(valor){
        // testa se o valor solicitado "TEM" na conta
        if(valor > this._saldo) {
            return 'Operação negada - saldo insuficiente';
        }
        // uma vez tendo o valor, diminue o valor do saldo atual
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

// classe filha ContaCorrente
// tem que colocar a palavra reservada extends para dizer que essa classe é uma extensao de outra
// indicar a classe pai

class ContaCorrente extends ContaBancaria{
    // no construtor da classe filha iremos chamar propriedades da classe pai e propriedades da classe filha
    constructor(agencia, numero, cartaoCredito) {
        // o super invoca as propriedades da classe superior (pai) - seus valores
        super(agencia, numero);
        // depois declaramos as propriedades locais
        // atribuir valores diferentes a uma classe existente no pai
        this.tipo = 'Corrente';
        // criacao de um metodo interno, nao existente no pai
        this._cartaoCredito =  cartaoCredito;
    }

    get cartaoCredito() {
        // retorna um boolean - se tem ou nao
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    // no construtor da classe filha iremos chamar propriedades da classe pai e propriedades da classe filha
    constructor(agencia, numero) {
        // o super invoca as propriedades da classe superior (pai) - seus valores
        super(agencia, numero);
        // depois declaramos as propriedades locais
        // atribuir valores diferentes a uma classe existente no pai
        this.tipo = 'Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    // no construtor da classe filha iremos chamar propriedades da classe pai e propriedades da classe filha
    constructor(agencia, numero) {
        // o super invoca as propriedades da classe superior (pai) - seus valores
        super(agencia, numero);
        // depois declaramos as propriedades locais
        // atribuir valores diferentes a uma classe existente no pai
        this.tipo = 'Universitária';
    }

    // limitar o saque na conta universitaria de no maximo R$500,00
    // vamos sobrescrever o metodo sacar da classe pai
    sacar(valor) {
        if(valor > 500) {
            return 'Operação negada - saque acima do limite';
        }
        this._saldo = this._saldo - valor;
    }
}