const lista = [
    {
        name: 'sabao em pó',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 25,
    },
    {
        name: 'toalha de papel',
        preco: 4.5,
    },
    {
        name: 'chocolate',
        preco: 2.99,
    },
]

var saldo = 500;

function calculaSaldo(saldo, arr) {
    return arr.reduce(function(prev, current) {
        // como o array é um array de objetos vc precisa especificar o atributo que voce que operar no objeto
        // neste caso queremos o preco
        return prev - current.preco;
    // o valor inicial para prev é o saldo    
    }, saldo);
}

console.log(calculaSaldo(saldo,lista));