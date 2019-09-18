var c=1;
var promedio=0;
var arreglo=[];
console.log("Escribe tu calificacion "+c);
var numero=process.openStdin();
numero.on('data', function(chunk) {
  arreglo[c-1]=chunk;
  if(c==10){
    for (var i = 0; i < arreglo.length; i++) {
      promedio+=arreglo[i]*1;
    }
    console.log("tu promedio es "+promedio/10);
  }
  c++;
  if(c>10){
  console.log("Escribe CONTROL+C para salir");
}else {
  console.log("Escribe tu calificacion "+c);
}
});
