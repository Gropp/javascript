const alunos = [
    {
        nome: 'João',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Tiago',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Maria',
        nota: 8,
        turma: '2B',
    },
    {
        nome: 'Paulo',
        nota: 4,
        turma: '2B',
    },
    {
        nome: 'Pedro',
        nota: 8,
        turma: '2B',
    },
];

function alunosAprovados(arr, media) {
    // Declara um array para guardar o nome dos aprovados, nota maior ou igual a media
    let aprovados  = []
    for(let i=0; i < arr.length; i++) {
        // chama o registro com o metodo de descontrucao
        // chama os elementos que procura no registro do array arr no indice i
        // sempre constante, entre CHAVES as propriedades que precisa
        // vai alimentar para cada posicao i do array arr
        const {nota, nome} = arr[i];
        // vc ja tem em duas constante a nota e o nome
        // agora é só usar as constantes
        if(nota >= media) {
            // se a nota deste registro no indice i for maior ou igual a medida salve o nome no array aprovados
            aprovados.push(nome);
        }

        // metodo tradicional
        // se referencia ao array na posicao i e pega o index nota e compara com a media
        // para cada i ele fara a comparacao da media com a nota 
            // if(arr[i].nota >= media) {
            //     // quem tiver a nota que satisfaca a condicao
            //     // terá seu nome incluido no array aprovados
            //     aprovados.push(arr[i].nome);
            //  }
    }
    // por fim retorne o array dos aprovados
    return aprovados;
}

console.log(alunosAprovados(alunos, 6));
console.log(alunosAprovados(alunos,[5]));


