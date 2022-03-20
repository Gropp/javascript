// var - global e local
// variavel boolean
var vOuF = false;
console.log(vOuF);

// variavel numerica
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// variavel string
var nome = 'Fernando';
console.log(nome);

// variavel indefinida - sem inicializacao o js nao sabe o tipo
var variavel;
console.log(typeof(variavel));

// variavel string
var variavel2 = 'Gropp';
console.log(variavel2);

function escopoLocal(){
    let local = 'dentro do bloco referido';
}
//ao mandar mostrar a variavel local fora da funcao da erro, pois fora da funcao ela nao existe - LET
//console.log(local);

const pi = 3.14;
console.log(pi);