console.log("Escribe una frase");
var frase=process.openStdin();
frase.on('data', function(chunk) {
  for (var i = 0; i < 5; i++) {
    console.log("\t\t\t\t "+chunk);
  }
 });
