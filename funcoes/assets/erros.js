//formas de tratar erros no javascript

function validaArray(arr, num){
    try {
        // testando para ver se tem parametros, e nao usar um tratamento de erro do tipo reference error
        if(!arr && !num) throw new ReferenceError('Envie os parametros');
        // testa se o objeto do argumento é um objeto
        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object')
        // testa se o argumento num é do tipo number
        if(typeof num !== 'number') throw new TypeError('num precisa ser do tipo number')
        // tipo range error - verifica se o tamanho do array é igual ao num passado
        if(arr.length !== num) throw new RangeError("Tamanho do array invalido!");
    
        // se o array for valido, retorna o array
        return arr;
    }
    // tratamento do erro por tipo de erro
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log('esse erro é um ReferenceError');
            console.log(e.message) 
        } else if(e instanceof TypeError) {
            console.log('esse erro é um TypeError');
            console.log(e.message)
        } else if(e instanceof RangeError) {
            console.log('esse erro é um RangeError');
            console.log(e.message)
        } else {
            console.log(`Tipo de erro não esperado: ${e}`);
        }
    }
}

console.log(validaArray([1,2,3,5,6], 5));