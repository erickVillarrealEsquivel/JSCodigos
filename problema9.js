console.log("escribe un numero");
var numero=process.openStdin();
numero.on('data', function(chunk) {
  if(chunk>=0){
  console.log("Positivo escribe otro numero o CONTROL+C para salir");
}else {
  console.log("Negativo escribe otro numero o CONTROL+C para salir");
}
 });
