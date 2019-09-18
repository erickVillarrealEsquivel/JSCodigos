var calificaciones=[[],[],[],[],[],[],[],[],[],[],[],[]];
var c=0;
var i=0;
var j=0;
var numeroDeCursos=0;
var numeroDeAlumnos=0;
console.log("ingresa el numero de cursos");
var numero=process.openStdin();
numero.on('data', function(chunk) {
  if(c==0){
    numeroDeCursos=chunk;
    console.log("ingresa el numero de Alumnos para todos los cursos igual");
  }
  if(c==1){
    numeroDeAlumnos=chunk;
    console.log("ingresa la calificacion del alumno 0 de la clase 0");
  }
  if(c>=2 && j<numeroDeCursos){
    calificaciones[i][j]=chunk;
    if(i==numeroDeAlumnos-1){
      i=0;
      j++;
    }else {
      i++;
    }
    if (j>=numeroDeCursos) {
      console.log("escribe Control+C pra salir");
    }else {
    console.log("ingresa la calificacion del alumno "+i+" de la clase "+j);
    }

  }

  c++;
});
