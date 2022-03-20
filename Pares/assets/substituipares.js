function  substituiPares(array) {
    if(!array) return -1; //verfica se o arrey é indefinido
    if(!array.length) return -1; //verifica se o array tem algum valor
    for(let i=0; i < array.length; i++) {
        if(array[i] === 0){
            alert("você já é zero");
        } else if (array[i] % 2 === 0){
            alert(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}

let sequencia = [32, 43, 55, 43, 22, 11, 12];
alert(substituiPares(sequencia));
