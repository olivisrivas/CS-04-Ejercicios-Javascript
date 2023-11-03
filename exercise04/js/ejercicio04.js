let estudiante1Cursos = ['Matemáticas', 'Inglés', 'Programación'];
let estudiante2Cursos = ['Geografías', 'Español', 'Programación'];

const cursos1 = new Set(estudiante1Cursos);

    for (let i = 0; i < estudiante2Cursos.length; i++){
    const sesion = estudiante2Cursos[i];
   

    if(cursos1.has(sesion)){
        console.log(`Curso en común: ${sesion}`);
    } 
    }