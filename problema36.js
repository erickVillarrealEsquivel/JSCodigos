var matriz=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
for (var i = 0; i < matriz.length; i++) {
  for (var j = 0; j < matriz[0].length; j++) {
    matriz[i][j]=Math.random()*100+1;
    console.log("el numero en la fila "+i+" y la culmna "+j+" es "+matriz[i][j]);
  }
}


var matrizT=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
for (var i = 0; i < matriz.length; i++) {
  for (var j = 0; j < matriz[0].length; j++) {
    matrizT[j][i]=matriz[i][j];
    console.log("el numero en la filaT "+j+" y la culmnaT "+i+" es "+matriz[i][j]);
  }
}
