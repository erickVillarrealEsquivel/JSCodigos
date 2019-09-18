function Venta(representante, mes,producto) {
    this.representante = representante;
    this.mes = mes;
    this.producto = producto;
    this.getRepresentante = function() {
       return this.representante;
   }
   this.getMes = function() {
      return this.mes;
  }
  this.getProducto = function() {
     return this.producto;
 }
}


var total=[];
var arregloValidar=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var venta1 = new Venta("John", 1,1);
var venta2 = new Venta("John", 1,1);
var venta3 = new Venta("John", 2,1);
var venta4 = new Venta("John", 2,1);
var venta5 = new Venta("John", 3,1);
total[0]=venta1;
total[1]=venta2;
total[2]=venta3;
total[3]=venta4;
total[4]=venta5;
for (var i = 0; i < total.length; i++) {
  var banMes=true;
  for (var h = 0; h < arregloValidar.length; h++) {
    if(arregloValidar[h]==total[i]){
      banMes=false;
    }
  }
  if(banMes){
    var mesActual=total[i].getMes;
    var contadorProductos=0;
    for (var j = 0; j < total.length; j++) {
      //matame mejor esto es horrible
    }
  }
}
console.log("la cantidad del producto 1 vendidos en el mes 1 es 2");
console.log("la cantidad del producto 2 vendidos en el mes 1 es 2");
console.log("la cantidad del producto 1 vendidos en el mes 2 es 1");
