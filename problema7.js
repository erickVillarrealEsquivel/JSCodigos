var c=0;
console.log("Escribe una frase");
var frase=process.openStdin();
frase.on('data', function(chunk) {
  c++;
  console.log("escribe otra frase o CONTROL+C para salir llevas "+c+" frases");
 });
