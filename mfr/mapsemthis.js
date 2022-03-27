function mapSemThis(arr) {
    return arr.map(function(item){
        // multiplica o valor do array por um valor fixo
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

// neste exemplo so passa um argumento para a funcao map
console.log(mapSemThis(nums));