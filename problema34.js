var lista=["l0","l1","l2","l3","l4","l5","l6","l7","l8","l9"];
console.log("que posicion quieres consultar");
var numero=process.openStdin();
numero.on('data', function(chunk) {
console.log(lista[chunk*1]);
});
