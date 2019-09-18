var sumImpares=0;
var sumPares=0;
for (var i = 0; i <= 1000; i++) {
  if(i%2==0){
    sumPares+=i;
  }else {
    sumImpares+=i;
  }
}
console.log("la suma de los pares es "+sumPares);
console.log("la suma de los impares es "+sumImpares);
