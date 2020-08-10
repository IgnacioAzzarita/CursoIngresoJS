function mostrar()
{
let bolsas;
let peso;
let sabor;
let promedio;
let acumPeso=0;
let liviano;
let saborLiviano;
let flagLiviano=0;
let contadorCarne=0;
let acumCarne=0;
let flagCarne=0;
for(let i=0;i<10;i++){
    peso=parseFloat(prompt("Ingrese el peso en kilos de la bolsa"));
while(peso<0 || peso>500){
    peso=parseFloat(prompt("Cantidad invalida! Ingrese un peso en kilos entre 0 y 500"));
}
acumPeso+=peso;
sabor=prompt("Ingrese el sabor".toLowerCase());
while(sabor!="carne" && sabor!="pollo" && sabor!="vegetales"){
    sabor=prompt("Ingrese un sabor valido. Pollo, carne o vetales".toLowerCase());
}
if(flagLiviano==0 || liviano>peso){
 liviano=peso;
 saborLiviano=sabor;
 flagLiviano=1;
}
if(flagCarne==0 || sabor=="carne"){
    acumCarne+=peso;
    contadorCarne++;
    flagCarne=1;
}
}
promedio=acumPeso/10;
let promedioCarne=acumCarne/contadorCarne;
alert("El promedio de kilos totales es de "+promedio+". El sabor del mas liviano es "+saborLiviano+" y su peso es "+liviano+". La cantidad de bolsas sabor carne es "+contadorCarne+" y el promedio en kilos es de "+promedioCarne);
}
