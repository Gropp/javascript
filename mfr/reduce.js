// metodo que reduz o conteudo de um array a um valor unico baseado em uma operacao

function somaNumeros(arr) {
    // aplica a reducao chamando uma funcao que recebe o valor previo e o atual
    // inicialmente o valor prev é 1
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev ** current;
    // o valor zero é opcional, ele forca o prev a valer zero na primeira iteracao da funcao reduce
    // para entao iniciar a operacao - em operacoes que o zero influencia na resposta, usa-lo pode modificar radicalmente o resultado - vamos deixar o zero para mostrar que existe um opcao de por um valor inicial para a variavel prev    
    }, 0);
}

const nums = [3,2,2];
console.log(somaNumeros(nums));