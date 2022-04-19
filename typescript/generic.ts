//generic types
//T é uma variavel generica que tipifica a funcao
//essa tecnica é utilizada para generalizar a tipagem dos daos da funcao
function adicionaApendiceLista<T>(array: any[], arg:T) {
    //substitui cada item da lista pelo valor passado
    console.log(array)
    //soma ou cocatena os itens e o argumento
    return array.map(item => item + arg);
    //substitui os itens pelo argumento
    //return array.map(() => arg)
}
//dependendo da aplicacao a lista e o argumento tem que tem o mesmo tipo
console.log(adicionaApendiceLista(['A','B',3], 2))