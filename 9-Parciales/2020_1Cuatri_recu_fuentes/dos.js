function mostrar()
{
let tipo;
let cantidadBolsas=0;
let precio;
let precioFinal;
let acumPrecio=0;
let contadorArena=0;
let contadorCal=0;
let contadorCemento=0;
let tipoMascomprado;
let tipoMasCaro;
let mayorPrecio;
let flagPrecioMayor=0;
let respuesta;

do{
tipo=prompt("Ingrese que elemento quiere".toLowerCase());
while(tipo!="Arena" && tipo!="cal"&& tipo!="cemento".toLowerCase()){
  tipo=prompt("Elemento invalido! Ingrese,cemento,cal o arena".toLowerCase());
}
cantidadBolsas++
if(tipo=="arena"){
  contadorArena++
}
else if(tipo=="cal"){
  contadorCal++
}
else if(tipo=="cemento"){
  contadorCemento++
}
precio=parseFloat(prompt("Ingrese un precio"));
while(precio<0){
  precio=parseFloat(prompt("Ingrese un precio mayor a 0"));
}
acumPrecio+=precio;
if(cantidadBolsas>10){
precioFinal=acumPrecio;
precioFinal-=acumPrecio*15/100;
}
else if(cantidadBolsas>30){
  precioFinal=acumPrecio;
  precioFinal-=acumPrecio*25;
}
else{
  precioFinal=acumPrecio;
}

if(flagPrecioMayor==0 || precio>mayorPrecio){
  mayorPrecio=precio;
  tipoMasCaro=tipo;
  flagPrecioMayor=1
}

respuesta=prompt("Escriba si para ingresar mas datos");
}while(respuesta=="si");

if(contadorCal>contadorCemento && contadorCal>contadorArena){
  tipoMascomprado="Cal";
}
else if(contadorArena>contadorCemento && contadorArena>contadorCal){
  tipoMascomprado="Arena";
}
else{
  tipoMascomprado="Cemento"
}
console.log("El importe sin descuento es igual a $"+acumPrecio);
console.log("El importe final es $"+precioFinal);
console.log("El tipo mas comprado es "+tipoMascomprado);
console.log("El tipo mas caro es "+tipoMasCaro);
}
