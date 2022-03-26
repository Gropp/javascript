let palavra = prompt('Insira uma palavra: ');

TryCatchError(palavra);

// if (!palavra) {
//     alert('palavra invalida!')
// } else {
//     alert(verificaPalindromo(palavra));
// }

function verificaPalindromo(string) {
    // throw retorna um erro como erro, dando informacoes sobre o mesmo
    if(!string) throw "string invalida!";

    //recebe a string, transforma em um array com o split
    //reverte todos os componentes do array reverse
    //junta novamente esse array invertido em uma string unica
    //compara com a string original
    //se for igual retorna true (palindrome)
    //se for diferente retorna false (nao é uma palindrome)
    return string.split("").reverse().join("") === string;
}

function TryCatchError(palavra) {
    try {
        //chama a funcao
        //usamos o alert pois tem um prompt para preencher
       alert(verificaPalindromo(palavra));
    } catch (error) {
        // customiza a mensagem de erro
        // customiza o nome do erro
        const MeuErro = new Error('String Inválida!');
        MeuErro.name = 'InvalidMessage';
        //  em caso de erro ele da um alerta
        //alert(error)
        throw error;
    }
}

