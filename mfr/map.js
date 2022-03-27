// exercicio utlizando a funcao map
// cria variavel para retorno tipo array
let resp = [];
// criacao de dois objtos que serao o argumento do this da funcao mapComThis
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}
 
function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        // o item vai receber o valor do objeto escolhido
        // a funcao map opera cada item do array arr, com o value do objeto escolhido
        // neste caso o this se refere a maca ou laranja
        // retorna o valor do map com a operacao desejada - qq operacao
        return item ** this.value;
    }, thisArg);
}

// criacao de um array teste
const nums = [1, 2];

// chama a funcao passando o array e o objeto desejados para operar
// this -> maca
console.log(mapComThis(nums, maca));
// this -> laranja - joga em uma variavel
resp = mapComThis(nums, laranja);
// imprime a variavel
console.log(resp);
// imprime o array original para ver que nao mudou
console.log(nums);
