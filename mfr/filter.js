function filterPares(arr) {
    // a funcao chama a funcao callback aplicando o filtro no array segundo o criterio da funcao callback
    return arr.filter(callback)
}
// tambem pode ser escrito: incluir o item direto, sem externar a funcao callback
//  return arr.filter(item){
//      return item % 2 === 0;
//  }

function callback(item) {
    // retorna somente os itens pares
    return item % 2 === 0;
}

const nums = [1,3,2,5,4,6,7,5,8,7,6,9,0];

console.log(filterPares(nums));