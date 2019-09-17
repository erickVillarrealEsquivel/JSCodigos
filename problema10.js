console.log("escribe un numero");
var numero=process.openStdin();
numero.on('data', function(chunk) {
  if(chunk%2==0){
  console.log("Par escribe otro numero o CONTROL+C para salir");
}else {
  console.log("Impar escribe otro numero o CONTROL+C para salir");
}
 });
