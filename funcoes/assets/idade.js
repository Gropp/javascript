
// utilizar o metodo this para acessar a varivel de dentro do registro
function calculaIdade(anos) {
    // o this.nome traz o conteudo do nome do registro
    // o this.idade traz o conteudo da idade do registro
    return `Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} de idade.`;
}

function getName() {
    return this.nome;
}
// declarando os registros para testar a funcao
const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};
const pessoa2 = {
    nome: 'João',
    idade: 20,
};
const pessoa3 = {
    nome: 'Pedro',
    idade: 35,
};
const pessoa4 = {
    nome: 'Elisa',
    idade: 38,
};
// o metodo call diz para a funcao chamada qual sera o registro a ser utilizado
// o nome do registro é o primeiro argumento da funcao
// o call passa arqumentos separados por virgulas
console.log(calculaIdade.call(pessoa2, 30));
console.log(getName.apply(pessoa3)); // sem argumentos
// o apply os argumento sao passados atraves de um array
console.log(calculaIdade.apply(pessoa4, [20]));

// o metodo é o bind - ele modifica o valor de this
// o bind ira atuar no objeto que tem o nome = ELISA
// funcao anonima
const retornaNames = function() {
    return this.nome;
}

let elisa = retornaNames.bind({nome: 'Elisa' });

// a  variavel elisa ao ser igualada a uma funcao anonima deve ser chamada como funcao
// a funcao tem como parametro o nome como sendo Elisa
// entao o this dentro deste escopo e com o indicae nome, retorna o valor dado a esse indice na
// chamada da funcao 
console.log(elisa());