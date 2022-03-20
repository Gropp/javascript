let palavra = prompt('Insira uma palavra:');
alert(verificaPalindromoNew(palavra));

function verificaPalindromoNew(string){     
    if(!string) return "string vazia";
    //cria um for para percorrer a metade da string
    //para ver se é igual a outra metade
    for(let i=0; i < string.length/2; i++) {
        if(string[i] !== string[string.length-1 - i]) {
            return false;
        }
    }
    return true;
}


