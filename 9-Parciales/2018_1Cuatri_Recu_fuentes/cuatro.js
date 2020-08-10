function mostrar()
{
let numero1=parseInt(prompt("Ingrese un número"));
let numero2=parseInt(prompt("Ingrese un número"));
let division;
let suma;
if(numero1==numero2){
    alert(numero1+" "+numero2);
}
if(numero1>numero2){
division=numero1/numero2;
}
else{
    suma=numero1+numero2;
}
if(suma<50){
    alert("El resultado es "+suma+" y es menor a 50");
}
}
