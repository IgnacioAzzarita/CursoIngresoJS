function mostrar()
{
let altura;
let sexo;
let contadorMujeres=0;
let promedio;
let acumAltura=0;
let alturaMasBaja;
let sexoMasBajo;
let flagBaja=0;
for(let i=0;i<5;i++){
 altura=parseInt(prompt("Ingrese su altura expresada en cm"));
while(altura<0 && altura>250){
    altura=parseInt(prompt("Altura invalida! Ingrese una altura entre 0 y 250"));
}
acumAltura+=altura;
sexo=prompt("Ingrese F si es mujer y M si es varón".toLowerCase());
while(sexo!="f" && sexo !="m"){
    sexo=prompt("Letra invalida! Ingrese F si es mujer y M si es varón".toLowerCase());
}
if(flagBaja==0 || altura<alturaMasBaja){
    alturaMasBaja=altura;
    sexoMasBajo=sexo;
    flagBaja=1;
}
if(sexo=="f" && altura>190){
    contadorMujeres++;
}
}
if(sexoMasBajo=="f"){
    sexoMasBajo="mujer";
}
else{
    sexoMasBajo="varón";
}
promedio=acumAltura/5;
alert("El promedio es "+promedio);
alert("La altura mas baja es "+alturaMasBaja+" y esa persona es "+sexoMasBajo);
alert("La cantidad de mujeres cuya altura es superior a 190cm es "+contadorMujeres);
}
