// testando os valores passados como argumentos

// chama a funcao passando um array e um valor num
// se o valor num vier indefinido a funcao usa o valor atribuido na chamada como default
// nesta caso o valor defaul do argumento num é 1
function exponencial(array, num=1) {
    // cria um array para guardar a resposta
    const result = [];

    // percorre o array e vai apendando (push) no array resposta
    for(let i=0; i < array.length; i++){
        result.push(array[i] ** num);
    }
    // no final retorna o array resultado
    return result;
}

console.log(exponencial([1,2,3,4,5,6])); // sem o parametro num
console.log(exponencial([1,2,3,4,5,6], 2)); // como o parametro num

// funcoes sem argumentos declarados podem nao ter argumentos, ou podem ter argumentos nao declarados
// essa funcao retorna o maior valor contido dentro de uma lista
function findMax(){
    // variavel que aceita infinitos valores negativos e positivos
    // já que a funcao pode ter argumentos nao declarados
    // arguments é um objeto iteravel
    let max = -Infinity;
    console.log(arguments);
    // neste laço, como nao sabemos o arqumento que vira na chamada da funcao
    // o metodo arguments consegue manipular de varias formas esse argumento indefinido
    // neste caso nos precisamos da propriedade tamanho deste argumento
    for(let i=0; i<arguments.length; i++)
        if(arguments[i]> max) {
            max = arguments[i];
        }
    return max;
}

console.log(findMax(1,2,3,54,3,22,54,64,75,35,98));