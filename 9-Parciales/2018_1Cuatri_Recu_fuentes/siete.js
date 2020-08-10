function mostrar()
{
let nota;
let sexo;
let promedio;
let acumNotas=0;
let contadorVarones=0;
let notaMasBaja;
let sexoMasBajo;
let flagNota=0;
for(let i=0;i<5;i++){
    nota=parseFloat(prompt("Ingrese su nota"));
while(nota<0 || nota>10){
    nota=nota=parseFloat(prompt("Numero invalido! Ingrese un numero del 0 al 10"));
    }
    acumNotas+=nota;
    sexo=prompt("Ingrese f si es mujer y m si es varon".toLowerCase());
while(sexo!="f" && sexo!="m"){
    sexo=prompt("Letra invalida! Ingrese f si es mujer y m si es varon".toLowerCase())
}
if(flagNota==0 || nota<notaMasBaja){
    notaMasBaja=nota;
    sexoMasBajo=sexo;
    flagNota=1;
}
if(sexo=="m" && nota>6){
    contadorVarones++
}
}
if(sexoMasBajo=="f"){
    sexoMasBajo= "mujer";
}
else{
    sexoMasBajo="varon";
}
promedio=acumNotas/5;
alert("El promedio es "+promedio);
alert("La nota mas baja fue un "+notaMasBaja+" y esa persona es "+sexoMasBajo)
alert("La cantidad de varones con notas mayores a 6 es "+contadorVarones);
}
