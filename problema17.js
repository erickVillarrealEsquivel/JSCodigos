var n1=10;
var n2=20;
var c=0;
var suma=0;
if(n2>=n1) {
  for (var i = n1; i <= n2; i++) {
    if (i%2==0) {
      c++;
      suma+=i;
      console.log(i);
    }
  }
  console.log("la cantidad es"+c);
  console.log("la suma es "+suma);
}else {
  console.log("el segundo tiene que ser mayor que el primero");
}
