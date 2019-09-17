console.log("Escribe un numero");
var numero=process.openStdin();
numero.on('data', function(chunk) {
  for(var i=0;i<=chunk;i++){
      console.log(i);
  }
  console.log("escribe otro numero o control+C para salir");
 });
