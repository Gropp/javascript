let palavra = prompt('Insira uma palavra: ');
if (!palavra) {
    alert('palavra invalida!')
} else {
    alert(verificaPalindromo(palavra));
}


function verificaPalindromo(string) {
    if(!string) return;

    //recebe a string, transforma em um array com o split
    //reverte todos os componentes do array reverse
    //junta novamente esse array invertido em uma string unica
    //compara com a string original
    //se for igual retorna true (palindrome)
    //se for diferente retorna false (nao é uma palindrome)
    return string.split("").reverse().join("") === string;
}

