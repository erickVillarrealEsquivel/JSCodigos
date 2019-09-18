console.log("Escribe un numero");
var ban=1;
var x=0;
var y=0;
var numero=process.openStdin();
numero.on('data', function(chunk) {
  if(ban==2) {
    console.log("Escribe S para sumar, R para restar, M para multiplicar, D para dividir");
    y=chunk;
  }
  if(ban==1){
    x=chunk;
    console.log("Escribe otro numero numero");

  }
  if(ban>=3){
    if(chunk=="S\n"){
      console.log((1*x)+(1*y));
    }
    if(chunk=="R\n"){
      console.log(0+x-y);
    }
    if(chunk=="M\n"){
      console.log(0+x*y);
    }
    if(chunk=="D\n"){
      console.log(0+x/y);
    }

console.log("Escribe S para sumar, R para restar, M para multiplicar, D para dividir o CONTROL+C para salir")

 }
 ban++;

});
