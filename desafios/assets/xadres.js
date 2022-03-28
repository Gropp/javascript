// Codigo em java para ver as cores dos tabuleiros em uma "mesa" de Xadrez

let l = Number(prompt('digite a posicao da linha: '));
let c = Number(prompt('digite a posicao da coluna: '));


let cor = ((l+c)%2===0)?1:0;

alert(`Branco 1, Preto 0 = cor: ${cor}`);
