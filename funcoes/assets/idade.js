
// utilizar o metodo this para acessar a varivel de dentro do registro
function calculaIdade(anos) {
    // o this.nome traz o conteudo do nome do registro
    // o this.idade traz o conteudo da idade do registro
    return `Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} de idade.`;
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
console.log(calculaIdade.call(pessoa2, 30));