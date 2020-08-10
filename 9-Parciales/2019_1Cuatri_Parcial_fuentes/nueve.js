function mostrar()
{
let pais;
let cantidadHabitantes;
let temperatura;
let contadorHabitantes=0;
let contadorTempPares=0;
let paisMenosHabi;
let contadorPaises40=0;
let promedio;
let acumHabitantes=0;
let temperaturaMinima;
let flagTemperaturaMinima=0;
let paisMinimo;
let flagMinimo=0;
let respuesta;
do{
pais=prompt("Ingrese el nombre de un país");
cantidadHabitantes=parseInt(prompt("Ingrese la cantidad de habitantes"));
while(cantidadHabitantes>7000 && cantidadHabitantes<1){
    cantidadHabitantes=parseInt(prompt("Numero invalido! Ingrese un numero entre 1 y 7000"));
}
acumHabitantes+=cantidadHabitantes;
contadorHabitantes++;
temperatura=parseInt(prompt("Ingrese la temperatura"));
while(temperatura<(-50) && temperatura>50){
    temperatura=parseInt(prompt("Ingrese una temperatura entre -50 y 50"));
}
if(temperatura%2==0){
    contadorTempPares++
}
if(flagMinimo==0 || cantidadHabitantes<paisMenosHabi){
    paisMenosHabi=pais;
    flagMinimo=1;
}
if(temperatura>40){
    contadorPaises40++
}
if(temperatura<temperaturaMinima || flagTemperaturaMinima==0){
    temperaturaMinima=temperatura;
    paisMinimo=pais
    flagTemperaturaMinima=1;
}

respuesta=(prompt("Ingrese si, si va a ingresar mas datos"));
}while(respuesta=="si");
promedio=acumHabitantes/contadorHabitantes;
console.log("Las temperaturas pares son "+contadorTempPares);
console.log("El país con menos habitantes es "+paisMenosHabi);
console.log("La cantidad de países que superan los 40 grados es "+contadorPaises40);
console.log("El promedio de habitantes es "+promedio);
console.log("La temperatura mas baja fue de "+temperaturaMinima+"grados y el país donde se registro fue "+paisMinimo);
}
