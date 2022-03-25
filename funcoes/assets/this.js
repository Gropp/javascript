// This é uma referencia de contexto
// sempre que uma funcao estiver dentro de um objeto, a gente chama ela de metodo
// objeto boca - funcao falar
// falar é um metodo do objeto boca
//  quando vc usa this em um metodo, ele sempre se referencia ao objeto pai deste metodo

const cabeca = {
    boca: 'falar',
    olho: 'olhar',
    nariz: 'cheirar',
    oquefaz: function() {
        return this.boca + " " + this.olho + " " + this.nariz;
    },
};

// funcao auto invocalvel para testar o this
(function () {
    console.log(this);
})();

// chamando a funcao oquefaz dentro do objeto cabeca
console.log(cabeca.oquefaz());

console.log(this)