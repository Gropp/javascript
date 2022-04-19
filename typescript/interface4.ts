interface Estudante {
    nome: string
    idade: number
}

//se vc declarar a mesma interface, o conteudo é somado
interface Estudante {
    serie: string
}

const agenda: Estudante = {
    nome: 'Henrique',
    idade: 14,
    serie: '9C'
} 

console.log(agenda)