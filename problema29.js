var c=0;
var x=0;
var y=0;
for (var i = 0; i < 100; i++) {
  x=Math.random()*6;
  y=Math.random()*6;
  if(x+y>=10 && x+y<=11){
    c++;
  }
}
console.log(c+" veces");
