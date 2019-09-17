var c=0;
console.log("Escribe un numero");
var numero=process.openStdin();
numero.on('data', function(chunk) {
  for(var i=1;i<=chunk;i++){
    if(i%3==0){
      c++;
      console.log(i);
    }
  }
  console.log("escribe otro numero o control+C para salir, la cantidad de multiplos fue "+c);
 });
