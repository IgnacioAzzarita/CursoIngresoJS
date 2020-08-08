function mostrar()
{
    let nota;
    let sexo;
    let promedio;
    let contadorNotas=0;
    let acumNotas=0;
    let notaMasBaja;
    let contadorMasculino=0;
    let flagNotaMAsBaja=0;
    let notaMasBajaSexo;
//inicio un bucle que tiene que iterar 5 veces
   for(let i=0;i<5;i++){
    nota=parseFloat(prompt("Ingrese su nota"));
    sexo=prompt("Ingrese f si es femenino y m si es masculino");
//valido notas
while(nota<0 || nota > 11){
    nota=parseFloat(prompt("Nota invalida!!! Ingrese su nota"));
    }
//valido sexo
while(sexo!="f" && sexo!="m"){
    sexo=prompt("Letra invalida!!! Ingrese f si es femenino o m si es masculino").toLowerCase();
} 
//sumar notas
acumNotas+=nota;
//Nota mas baja
if(flagNotaMAsBaja==0 || nota<notaMasBaja){
    notaMasBaja=nota;
    notaMasBajaSexo=sexo;
    flagNotaMAsBaja=1
}
//cuento masculinos
if(sexo=="m"&&nota>=6){
    contadorMasculino++
}

}

//muestro
promedio=acumNotas/5;
console.log(promedio);
console.log("Nota más baja: "+notaMasBaja+" y su sexo es "+sexo);
console.log(contadorMasculino);
}
