/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	
	let sumaPositivos=0;
	let sumaNegativos=0;
	let contadorPositivo=0;
	let contadorNegativo=0;
	let contadorCero=0;
	let contadorPares=0;
	let promedioPositivos=0;
	let promedioNegativos=0;
	let diferencia;
	let seguir;
	let numero;
do{
	numero=parseInt(prompt("Ingrese los numeros que guste"));
	if(numero>0){
		sumaPositivos=sumaPositivos+numero;
        contadorPositivo++;
	}
	else if(numero<0){
		sumaNegativos+=numero;
		contadorNegativo++;
	}
	else{
		contadorCero++;}
	if(numero%2==0){
		contadorPares++;
	}
	seguir = prompt("Quiere ingresar otro número? Si así lo desea escriba si y luego ingrese su número");
}while(seguir=="si");
if(contadorPositivo !=0){
promedioPositivos=sumaPositivos/contadorPositivo;
}
if(contadorNegativo !=0){
promedioNegativos=sumaNegativos/contadorNegativo;
}
diferencia=contadorPositivo-contadorNegativo;
document.write("La suma de los negativos es "+sumaNegativos+"</br>");
document.write("La suma de los positivos es "+sumaPositivos+"</br>");
document.write("Hay "+contadorPositivo+" numeros positivos"+"</br>");
document.write("Hay "+contadorNegativo+"numeros negativos"+"</br>");
document.write("Hay "+contadorCero+" ceros"+"</br>");
document.write("La cantidad de numeros pares es "+contadorPares+"</br>");
document.write("El promedio de los positivos es "+promedioPositivos+"</br>");
document.write("El promedio de los negativos es "+promedioNegativos+"</br>");
document.write("La diferencia entre los contadores es "+diferencia);
}//FIN DE LA FUNCIÓN