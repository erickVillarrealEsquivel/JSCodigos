var c=0;
var cadena;
var letra='a';
console.log("Escribe una frase");
var frase=process.openStdin();
frase.on('data', function(chunk) {
  cadena=Array.from(chunk);
  for (var i = 0; i < cadena.length; i++) {
    if(letra.charCodeAt(0)==cadena[i]){
      c++;
    }
  }
  console.log("el numero de a en la frase es "+c);
  console.log("escribe otra frase o CONTROL+C para salir");
  c=0;
});
