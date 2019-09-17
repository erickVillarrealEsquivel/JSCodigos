console.log("escribe el numero 1");
var i=1;
var numero=process.openStdin();
var maximo=0;
var minimo=1000000000;
numero.on('data', function(chunk) {

    if(chunk<minimo) {
      minimo=chunk;
    }
    if(chunk>maximo) {
      maximo=chunk;
    }
    if(i==5){
      console.log("el maximo es "+maximo+" el minimo es "+minimo);
      console.log("escribe CONTROL+C para salir o escribe otros 5 numeros")
      i=0;
      maximo=0;
      minimo=100000000;
    }
    i++;
    console.log("escribe el numero "+i);

});
