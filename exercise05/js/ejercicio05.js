let gente = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1) Imprimir todas las personas de la lista.
console.log(`1) Se imprime: [ ${gente} ] `);

// 2) Eliminar "Dani" de la matriz.
gente.splice(gente.indexOf("Dani"), 1);
console.log(`2) Se imprime y se elimina 'Dani': [ ${gente} ] `);

// 3) Eliminar "Juan" de la matriz.
gente.splice(gente.indexOf("Juan"), 1);
console.log(`3) Se imprime y se elimina 'Juan': [ ${gente} ]`);

// 4) Mover "Luis" al frente del arreglo.
gente.splice(0, 0, gente.splice(gente.indexOf("Luis"), 1)[0]);
console.log(`4) Se imprime donde 'Luis' está al frente: [ ${gente } ] `);

// 5) Agregar su nombre al final de la matriz.
gente.push("Olivia");
console.log(`5) Se imprime con el nombre agregado al final: [ ${gente } ] `);

// 6) Usar un bucle para imprimir hasta "Maria" y luego salir del bucle.
console.log(`6) Se imprime hasta 'Maria': `);
for (let i = 0; i < gente.length; i++) {
    console.log(gente[i]);
    if (gente[i] === "Maria") {
        break;
    }
}

// 7) Obtener el indexOf de "Maria".
const indexOfMaria = gente.indexOf("Maria");
console.log(`7) El índice de 'Maria' es: ${indexOfMaria}` );

// Al final del ejercicio, debería haber 4 personas en la formación.
console.log(`Al final del ejercicio solo quedan: [ ${gente} ]` );
