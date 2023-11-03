const arreglo = [1, 2, 3, 4];

function sumTotal(arreglo) {
    let suma = arreglo.reduce((resultado, elemento) => {
        return resultado + elemento;
    });

    let total = arreglo.reduce((resultado, elemento) => {
        return resultado * elemento;
    });

    return { suma, total };
}

const resultados = sumTotal(arreglo);

console.log(`Los resultados de la suma son: ${resultados.suma} y el total es ${resultados.total}`);
