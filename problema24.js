//problema 24
console.log("Escribe un numero");
var numero=process.openStdin();
var ban=true;
numero.on('data', function(chunk) {
  for(var i=2;i<chunk;i++){
      if(chunk%i==0){
        ban=false;
      }
  }
  if (ban) {
  console.log("es primo");
  }else {
    console.log("no es primo");
  }
  ban=true;
  console.log("Escribe otro numero o CONTROL+C para salir");
});
