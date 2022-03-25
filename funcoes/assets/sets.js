// SET vs ARRAY
// Sets sao extruturas que armazenam valores que nao se repetem NUNCA - VALORES UNICOS
// ao inves de length o set usa size - ver documentacao
// array é mais flexivel - tem mais operacoes

const mySet = new Set();

// adicionar valores
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);


// consultar valores
mySet.has(4); //true
console.log(mySet.has(49));

console.log(mySet);

// ainda é possivel apagar, entre outtros

// atividade com SETs

// cria um array com uma sequencia de numeros
const myArray = [30, 30, 40, 5, 233, 2040, 3034, 5];

function valoresUnicos(arr) {
    // cria um SET com os elementos do array
    const mySet = new Set(arr);
    // precisamos transformar o set em um array
    // entao podemos usar o metodo de REST, que passa o argumento com ...
    
    // retorna um SET
    // return mySet;

    // returna um array vindo do SET
    return[...mySet];
}

console.log(valoresUnicos(myArray));