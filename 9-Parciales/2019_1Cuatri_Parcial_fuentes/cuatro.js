function mostrar()
{
let numero1=parseInt(prompt("Ingrese un numero"));
let numero2=parseInt(prompt("Ingrese otro numero"));
let resta;
let suma;
if(numero1==numero2){
    alert(numero1+" "+numero2);
}
if(numero1>numero2){
    resta=numero1-numero2;
}
else{
suma=numero1+numero2;
}
if(resta>10){
    alert("El resultado de la resta es "+resta);
    alert("La resta es "+resta+" y superó el 10");
}
}
