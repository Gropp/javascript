// uso das tecnicas de
// spread - separa os valores de um array
// rest - junta valores soltos em um array
// sao antagonicos

function sumRest(x, y, z) {
    return x + y + z;
}

// declaracao de uma constante - array com 3 elementos
const numbers = [1, 2, 3];

// chamando a funcao passando o array numbers com tres elementos
// a funcao tem tres argumentos
// com os ... eu mando o array "ABRIR" e passar cada valor como elementos separados da funcao
console.log(sumRest(...numbers));

// o resto transforma elementos soltos em arrays
// os ... juntam os argumentos em um array
function confereTamanhoRest(...args) {
    console.log(args.length)
}

confereTamanhoRest() //0
confereTamanhoRest(1, 2) //2
confereTamanhoRest(1, 2, 3) //3
