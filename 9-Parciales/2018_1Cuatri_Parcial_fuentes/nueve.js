function mostrar()
{
let marca;
let peso;
let temperatura;
let contadorProductos=0;
let contadorTemperaturaPar=0;
let marcaProductoPesado;
let contadorProductoFrio=0;
let promedio=0;
let pesoMaximo=0;
let pesoMinimo=0;
let acumPeso=0;
let respuesta;
let flagPesado=0;
do{

peso=parseFloat(prompt("Ingrese el precio del producto"));
while(peso<0 || peso>=101){
    peso=parseFloat(prompt("Precio invalido! Ingrese un precio de 1 a 100"));
}
acumPeso+=peso;
temperatura=parseInt(prompt("Ingrese la temperatura a la que debe conservarse el producto"));
while(temperatura<(-31) || temperatura>31){
    temperatura=parseInt(prompt("Temperatura invalida! Ingrese una temperatua entre -30 y 30"));
}
marca=prompt("Ingrese la marca");
contadorProductos++
if(temperatura%2==0){
    contadorTemperaturaPar++
}
if(temperatura<0){
    contadorProductoFrio++;
}
if(peso>pesoMaximo){
    pesoMaximo=peso;
}
else if(peso<pesoMinimo){
    pesoMinimo=peso;
}
if(flagPesado==0 || peso>pesoMaximo){
marcaProductoPesado=marca;
flagPesado=1;
}
respuesta=prompt("Ingrese si, si quiere ingresar mas datos");
} while(respuesta=="si");

promedio=acumPeso/contadorProductos
console.log("La cantidad de temperaturas pares es "+contadorTemperaturaPar);
console.log("La marca del producto mas pesado es "+marca);
console.log("La cantidad de productos cuya temperatura de conservación es menor a 0 es "+contadorProductoFrio);
console.log("El promedio del peso de todos los productos es "+promedio);
console.log("El peso maximo es "+pesoMaximo+" y el precio minimo es "+pesoMinimo);
}
