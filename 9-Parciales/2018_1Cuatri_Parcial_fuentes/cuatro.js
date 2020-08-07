function mostrar()
{
    let numero1=parseInt(prompt("Ingrese el valor 1"));
    let numero2=parseInt(prompt("Ingrese el valor 2"));
    let suma=numero1+numero2;
    if(numero1==numero2){
        alert(numero1+" "+numero2);
    }
    if(numero1>numero2){
       let resta=numero1-numero2;
        alert(resta);
    }
    if(numero1<numero2){
       
        alert(suma);
    
     if(suma>10){
        alert("La suma es "+suma+" y supero el 10");
    }
}
}
