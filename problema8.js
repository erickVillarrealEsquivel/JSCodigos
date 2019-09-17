console.log("escribe S o N");
var frase=process.openStdin();
frase.on('data', function(chunk) {
  if(chunk=="S\n" || chunk=='N\n'){
  console.log("Correcto escribe otra cosa o CONTROL+C para salir");
}else {
  console.log("ERROR escribe otra cosa o CONTROL+C para salir");
}
 });
