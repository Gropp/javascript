function figFaltantes(arr) {        
    
    const numTotal = 10;
    const numFigCompradas = 3; 
    let totalFiguras = 0;

    for (let i=0; i <numFigCompradas; i++) {
        let figurinha = arr[i];
        let repetidas = 0;
        console.log(figurinha);

        for (j=0; j < numFigCompradas; j++) {
            if(arr[j] == figurinha) {
                repetidas++;
            }
        }
        console.log(repetidas);
        if (repetidas>=2) {
            for(j=0; j<numFigCompradas; j++){
                if(figurinha == arr[j]) {
                    arr[j] = -1;
                    break;
                }
            }
        }
        console.log(arr);
    }
    let figuras = 0;
    for (let i=0; i < numFigCompradas; i++){
        // somo a qtd de figuras nao repetidas
        if(arr[i] != -1) {
            figuras++;
        }
    }
    console.log(figuras);

    return totalFiguras = numTotal-figuras;
}

console.log(figFaltantes([5,8,3]));