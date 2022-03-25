// descontruindo objetos

// Objeto user com dados do usuario
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

// funcao que retorna o id do objeto selecionado
function userId({id}) {
    return id;
}

// chama a funcao passando o objeto de interesse
console.log(userId(user));

// funcao que carrega o indice fullName do objeto e separa sua variaveis em duas variaveis locais
// o retorno é a impressao no console dos valores das variveis locais
function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

// chama a funcao passando o objeto de interesse
console.log(getFullName(user));