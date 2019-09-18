function Dato(id, nombre,apellido,direccion,estado) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.estado = estado;
    this.setId = function(id) {
       this.id=id;
   }
   this.setNombre = function(nombre) {
      this.nombre=nombre;
  }
  this.setApellido = function(apellido) {
     this.apellido=apellido;
 }
 this.setApellido = function(apellido) {
    this.apellido=apellido;
}
this.setDireccion = function(direccion) {
   this.direccion=direccion;
}
this.setEstado = function(estado) {
   this.estado=estado;
}
   this.getId = function() {
      return this.id;
  }
  this.getEstado = function() {
     return this.estado;
 }
}
dato1=new Dato(1,1,1,1,1);
dato1.setId(2);
console.log(dato1.getId());
