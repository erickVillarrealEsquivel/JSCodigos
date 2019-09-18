console.log("Escribe un numero");
var numero=process.openStdin();
  numero.on('data', function(chunk) {
    var n=chunk;
    var  unidades = n % 10;
    n /= 10;
    var decenas = n % 10;
    n /= 10;
    var  centenas = n % 10;
    numero /= 10;
    var millares = n % 10;
    n /= 10;



    switch (millares){
      case 1: console.log("M");
      break;
      case 2: console.log("MM");
      break;
      case 3: console.log("MMM");
      break;
      case 4: console.log("MV");
      break;
      case 5: console.log("MV");
      break;
    }

 switch (centenas){
  case 1: console.log("C");
  break;
  case 2: console.log("CC");
  break;
  case 3: console.log("CCC");
  break;
  case 4: console.log("CD");
  break;
  case 5: console.log("D");
  break;
  case 6: console.log("DC");
  break;
  case 7: console.log("DCC");
  break;
  case 8: console.log("DCCC");
  break;
  case 9: console.log("CM");
  break;
 }

 switch (decenas){
  case 1: console.log("X");
  break;
  case 2: console.log("XX");
  break;
  case 3: console.log("XXX");
  break;
  case 4: console.log("XL");
  break;
  case 5: console.log("L");
  break;
  case 6: console.log("LX");
  break;
  case 7: console.log("LXX");
  break;
  case 8: console.log("LXXX");
  break;
  case 9: console.log("XC");
  break;
 }

 switch (unidades){
  case 1: console.log("I");
  break;
  case 2: console.log("II");
  break;
  case 3: console.log("III");
  break;
  case 4: console.log("IV");
  break;
  case 5: console.log("V");
  break;
  case 6: console.log("VI");
  break;
  case 7: console.log("VII");
  break;
  case 8: console.log("VIII");
  break;
  case 9: console.log("IX");
  break;
 }

});
