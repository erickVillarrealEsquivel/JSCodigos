console.log("Escribe un numero");
var numero=process.openStdin();
numero.on('data', function(chunk) {
  for(var i=1;i<=10;i++){
      console.log(i+"X"+chunk+"="+i*chunk);
  }
  console.log("escribe otro numero o control+C para salir");
 });
