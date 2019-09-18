console.log("ingrese la hora del reloj");
var numero=process.openStdin();
numero.on('data', function(chunk) {
  console.log("la hora es "+ chunk);
});
