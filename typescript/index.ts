//acessar o utility types
interface Pessoa {
    nome: string
    idade: number
    nacionalidade: string
}

// o omit, omite uma propriedade de uma interface, uma vez que a interface filha já é para brasileiros
interface Brasileira extends Omit<Pessoa, 'nacionalidade'> {
    //codigo
}

const brasileiros: Brasileira {
    //...
}