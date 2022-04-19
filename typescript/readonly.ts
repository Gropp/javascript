interface Cachorro {
    nome: string
    idade: number
    //propriedade opcional
    parque?: string
}

type CachorroSomenteLeitura = {
    //adcionando o readonly e removendo o opcional das propriedades opcionais, elas agora sao obrigatorias
    //para cada entrada k da interface cachorro
    +readonly [k in keyof Cachorro]-?: Cachorro[k];
}
//classe meucachorro que implementa a interface cachorro
class MeuCachorro implements Cachorro {
    nome
    idade
    parque

    constructor(nome, idade, parque) {
        this.nome = nome;
        this.idade = idade;
        this.parque = parque;
    }
}

const cao = new MeuCachorro('Apolo', 14, 'São Lourenço');

console.log(cao)