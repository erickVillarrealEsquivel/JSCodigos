function factorial(numero){
  var fact=1;
  for (var  i = 1; i <= numero; i++) {
    fact*=i;
  }
  return fact;
}

console.log(factorial(5));
