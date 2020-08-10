function mostrar()
{
let numero1=parseInt(prompt("Ingrese un numero"));
let numero2=parseInt(prompt("Ingrese otro numero"));
let cuadrado;
let resta;
let resto;
if(numero1==numero2){
cuadrado=numero1*numero2;
alert("El numero al cuadrado es "+cuadrado);
}
if(numero1%numero2==0){
resta=numero1-numero2;
}
else{
    resto=numero1%numero2;
    alert("El resto es "+resto);
}
if(resto>3){
    alert("El resto es "+resto+" y es mayor a 3");
}
}
