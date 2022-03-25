// Arrow functions =>
// ARROW FUNCTION NAO FAZ HOISTING - TEM QUE DECLARAR A CONST/VAR ANTES DE CHAMAR.
// O VALOR THIS SEMPRE SERA GLOBAL, ENTAO NAO FUNCIONA O CALL, APPLY E BIND
// NAO TEM O OBJETO ARGUMENTS
// NAO TEM CONSTRUTORES - NEW
// NAO UTILIZE ARROW FUNCTIONS COMO METODOS DE OBJETOS PELAS RAZOES ACIMA!


// funcao anonima
const helloWorld = function(){
    return "hello World";
}

// reducao da funcao acima
// com uma arrow function
const helloWorld1 = () => {
    return "hello World 1";
}

// reduzindo mais aidna
// quando a funcao for muito pequena vc nao precisa definir o return
const helloWorld2 = () => "hello world 2";

// arrow function passando dois argumentos
const soma = (a, b) => a + b;

// arrow function com um argumento e SEM COLCHETES
const mostra = string => string;

console.log(helloWorld());
console.log(helloWorld1());
console.log(helloWorld2());
console.log(soma(4, 3));
console.log(mostra("ArrowFunction"));