
function mostrar()
{
let tipo;
let precio;
let precioJabonCaro;
let cantidadProductos;
let marca;
let fabricante;
let fabricanteMasCaro;
let contadorBarbijo=0;
let contadorJabon=0;
let contadorAlcohol=0;
let acumBarbijos=0;
let acumJabon=0;
let acumAlcohol=0;
let acumuladorJabonCaro=0;
let acumMayor=0;
let promedioMasCaro=0;
let flagJabonCaro=0;
for(let i=0;i<5;i++){
tipo=prompt("Ingrese el tipo de producto");
while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol".toLowerCase()){
    tipo=prompt("Ingrese un tipo de producto valido! Barbijo, Alcohol o Jabon");
}
precio=parseFloat(prompt("Ingrese el precio"));
while(precio<100 || precio>300){
    precio=parseFloat(prompt("Ingrese un precio valido. Entre 100 y 300"));
}
cantidadProductos=parseInt(prompt("Ingrese la cantidad de productos que va a comprar"));
while(cantidadProductos<=0 || cantidadProductos>1000){
    cantidadProductos=parseInt(prompt("Ingrese una cantidad entre 1 y 1000"));
}

marca=prompt("ingrese la marca");
fabricante=prompt("Ingrese el fabricante");

switch(tipo){
    case "alcohol":
     contadorAlcohol++
     acumAlcohol+=cantidadProductos;
     break;
    case "barbijo":
        contadorBarbijo++
        acumBarbijos+=cantidadProductos;
        break;
    case "jabon":
        contadorJabon++
        acumJabon+=cantidadProductos;
        if(flagJabonCaro==0 || precio>precioJabonCaro){
            precioJabonCaro=precio;
            acumuladorJabonCaro+=cantidadProductos;
            fabricanteMasCaro=fabricante;
            flagJabonCaro=1;
            break;
        }
        }

if(acumJabon>acumAlcohol && acumJabon>acumBarbijos){
    acumMayor+=acumJabon;
    promedioMasCaro=acumMayor/contadorJabon
}
else if(acumAlcohol>acumJabon && acumAlcohol>acumBarbijos){
    acumMayor+=acumAlcohol;
    promedioMasCaro=acumMayor/contadorAlcohol;
}
else {
    acumMayor=acumBarbijos;
    promedioMasCaro=acumMayor/contadorBarbijo;
}


}
console.log("La cantidad de jabones mas caros es "+acumuladorJabonCaro+" y el fabricante es "+fabricanteMasCaro);
console.log("El promedio "+promedioMasCaro);
console.log("La cantidad de barbijos es "+acumBarbijos);
}
