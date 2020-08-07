function mostrar()
{
    let nota;
    nota=parseFloat(prompt("Ingrese su nota"));
    let sexo=prompt("Ingrese f si es femenino o m si es masculino");
    let promedio;
    let acumNotas=0;
    let notaMasBaja;
    let flagNota=0;


    if(nota<0 || nota>11 || isNaN(nota)){
        nota=parseFloat(prompt("Ingrese una nota del 0 al 10"));
    }
    for(let contadorNotas=0;nota<=10 && nota>=0 ;contadorNotas++){
        notaMasBaja=nota;
        acumNotas= acumNotas+nota;
        if(flagNota==0 || nota<notaMasBaja){
            notaMasBaja=nota;
            flagNota=1;
        }
    }
    while(sexo!="f" || sexo!="m".toLowerCase);{
        sexo=prompt("Sexo invalido! Ingrese f si es femenino o m si es masculino");
    }
    for(let contadorMasculino=0;sexo=="m" || sexo=="M" ; ){
     if(nota>=6){
         contadorMasculino++;
     }
    }
     if(flagNota==1){
         alert("La nota mas baja fue "+notaMasBaja+" y el sexo de la persona es "+sexo);
     }
    promedio=acumNotas/contadorNotas;
    alert("el promedio es "+promedio);
    alert("La cantidad de varones con notas mayores a 6 son: "+contadorMasculino);

}
