function mostraIdade(nome, idade) {
    return `A idade de ${nome} é ${idade}`;
}

function mostraCidade(nome, cidade) {
    return `A cidade de ${nome} é ${cidade}`;
}

function mostraHobby(nome, hobby) {
    return `O hobby de ${nome} é ${hobby}`;
}

//? vamos usar o named export de todas as funcoes juntas
export {mostraIdade, mostraCidade, mostraHobby};


