var matriz=[[1,4,23,2],[3,2,6,8,56],[54,665,87,76,23],[1,23,5,6,5]];
for (var ij = 0; ij < matriz.length; ij++) {
  var salto;
  var aux
   var i;
  var cambios;
  for(salto=matriz[ij].length/2; salto!=0; salto/=2){
          cambios=true;
          while(cambios){ // Mientras se intercambie algún elemento
                      cambios=false;
                      for(i=salto; i< matriz[ij].length; i++) // se da una pasada
                              if(matriz[ij][i-salto]>matriz[ij][i]){ // y si están desordenados
                                    aux=matriz[ij][i]; // se reordenan
                                    matriz[ij][i]=matriz[ij][i-salto];
                                    matriz[ij][i-salto]=aux;
                                    cambios=true; // y se marca como cambio.
                              }
                       }
           }
}
console.log("ya se ordeno");
