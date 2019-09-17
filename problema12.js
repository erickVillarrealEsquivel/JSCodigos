var sumImp=0;
var sumPar=0;
for(var i=1;i<=100;i++){
  if(i%2==0){
    sumPar+=i;
  }else {
    sumImp+=i;
  }
}
console.log("la suma de la pares es "+sumPar+" la suma de los impares es "+sumImp);
