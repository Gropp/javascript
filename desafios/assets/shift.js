var string = 'E aí? Curtiu a Escola de Inverno deste ano? Para que esta Escola acontecesse, foram muitos que trabalharam, seja na elaboração dos problemas, na configuração do Portal, na logística do evento ou na captação dos recursos. Nosso agradecimento especial deste ano vai para o Prof. Ricardo Oliveira, que não somente aceitou vir ministrar as oficinas como também participou ativamente na organização da Escola. Temos certeza que a experiência e a carreira dele no ICPC como competidor e como coach motivaram e inspiraram todos nós.Esperamos que você tenha gostado desses últimos dias em Essos e em Westeros, que tenha aprendido bastante e que tenha se divertido. Mas não é só em Essos e em Westeros que você deve se divertir. Aqui, em Além da Muralha, programar também é divertido. Continue estudando, continue treinando, e cada vez mais. O importante é o caminho que você vai trilhar daqui para frente. Nosso conselho é que você procure sempre aproveitar ao máximo cada momento, cada oficina, cada escola, cada treino, cada tempo de prática ou estudo em casa. Nossos dias nunca voltarão.';
// com a opcao \n dentro do split ele coloca todo o texto dentro da posicao 0 do array
// sem a opçao \n cada caracter vira uma posicao dentro do array
// split coloca o conteudo da variavel string dentro de um array
var array = string.split('\n');
console.log(array.length);
console.log(array);
// let n = parseInt(array.shift());
// console.log(n);
// loop para tirar os conteudos do array, item a item, da esquerda para direita
while( (i = array.shift()) !== undefined ) {
    // a cada iteracao ele mostra o conteudo tirado
    console.log(i);
};
// no final se imprimir a array ele esta zerado
// ele modifica o array!
console.log(array);

// buscado a setima posicao de uma string
input = '7';
var lines = input.split('\n');
console.log(input);
console.log(lines);
let text = 'LIFE IS NOT A PROBLEM TO BE SOLVED';
console.log(text);
let n = parseInt(lines.shift());
console.log(n);
console.log(text.substring(0,n));
