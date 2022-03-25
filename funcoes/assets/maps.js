// colecao de arrays no formato[chave, valor]

const myMap = new Map();

// coloca uma chave apple com o valor fruit na colecao
myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

// get retorna o valor de uma chave especifica
console.log(myMap.get('apple'));

// para deletar um registro usa-se o metodo delete
// myMap.delete('apple');

console.log(myMap.keys());
console.log(myMap.entries());

// teste de map

function getAdmin(map) {
    // cria um array vazio para a resposta
    let admins = [];
    // faz uma iteracao dentro do map ja pegando a chave e o valor
    for([key, value] of map){
        if(value === 'Admin'){
            // se o valor for igual a admin apenda no array
            admins.push(key)
        }
    }
    // retorna a resposta
    return admins;
}

// cria uma variavel usuarios que é uma nova instancia de Map
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Maria', 'Consultor');
usuarios.set('Natalia', 'User');
usuarios.set('jorge', 'Admin');


console.log(getAdmin(usuarios));