function mostrar()
//dos datos
//una letra
// un numero entre -100 y 100(validar)
//veces que el usuario quiera
{
    let datoLetra;
    let datoNumero;
    let contadorImpares=0;
    let contadorPares=0;
    let contadorCero=0;
    let contadorPositivo=0;
    let sumaPositivo=0;
    let sumaNegativo=0;
    let promedio;
    let numeroMaximo=0;
    let numeroMinimo=0;
    let letraMaxima;
    let letraMinima;
    let flagMaximo=0;
    let flagMinimo=0;
    let seguir="si".toLowerCase();
    do{
        //tomo datos
        datoNumero=parseInt(prompt("Ingrese un numero entre -100 y 100"));
        
        //valido datos
        while(datoNumero<=(-100) || datoNumero>=100 || isNaN(datoNumero)){
            datoNumero=parseInt(prompt("Numero invalido! Ingrese un numero entre -100 y 100"));
        }
        datoLetra=prompt("Ingrese una letra");
        while(datoLetra=="" || !(isNaN(datoLetra))){
        datoLetra=prompt("Valor invalido! Ingrese una letra");
        }
       if(datoNumero>numeroMaximo){
           numeroMaximo=datoNumero;
           letraMaxima=datoLetra;
           flagMaximo=1
       }
       if(datoNumero<numeroMinimo){
         numeroMinimo=datoNumero;
         letraMinima=datoLetra;
         flagMinimo=1;
       }
       if(datoNumero%2!=0){
           contadorImpares++;
       }
       else{
           contadorPares++;
       }
       if(datoNumero==0){
           contadorCero++;
           
       }
      if(datoNumero>=0){
        contadorPositivo++;
        sumaPositivo+=datoNumero;
      }
      else{
          sumaNegativo+=datoNumero;
      }
       seguir=prompt("Quiere ingresar otro dato?"+" Escriba si, si asi lo quiere.");
}while(seguir=="si");
promedio=sumaPositivo/contadorPositivo
if(datoLetra=undefined){
    datoLetra="No ingreso mas de 1 letra";
}

console.log("La cantidad de numeros pares es "+contadorPares);
console.log("La cantidad de numeros impares es "+contadorImpares);
console.log("La cantidad de ceros es "+contadorCero);
console.log("El promedio de los positivos es "+promedio);
console.log("La suma de los negativos es "+sumaNegativo);
console.log("El numero maximo es "+numeroMaximo+" y su letra es "+letraMaxima);
console.log("El numero minimo es "+ numeroMinimo+" y su letra es "+letraMinima);
}
