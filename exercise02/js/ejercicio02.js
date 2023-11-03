const arreglo = [1, 2, 4, 5];

mult(arreglo);

function mult(arreglo) {
    for(let i = 0; i < arreglo.length; i++ ){
        arreglo[i] = arreglo[i] * 2;
    } 
    console.log(arreglo);
}