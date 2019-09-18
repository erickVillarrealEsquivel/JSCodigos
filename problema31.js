console.log("Escribe un numero");
var x=0;
var ban=1;
var banPrimo=true;
var numero=process.openStdin();
numero.on('data', function(chunk) {
  if(ban==1){
    x=chunk;
    console.log("Escribe P para saber si es primo, F para sacar su factorial o T para imprimir su tabla");
  }else {
    if(chunk=="P\n"){
      for(var i=2;i<x;i++){
          if(x%i==0){
            banPrimo=false;
          }
      }
      if (banPrimo) {
      console.log("es primo");
      }else {
        console.log("no es primo");
      }

    }
    if(chunk=="F\n"){
      var fact=1;
      for (var  i = 1; i <= x; i++) {
        fact*=i;
      }
      console.log("el factorial es "+fact);
    }
    if(chunk=="T\n"){
      for(var i=1;i<=10;i++){
          console.log(i+"X"+x+"="+i*x);
      }
    }
  }

ban++;
});
