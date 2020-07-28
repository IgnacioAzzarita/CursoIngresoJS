/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar(){
	let seguir="s";
	let numero=0;
	let suma=0;
	let promedio;
	let i=0
	do {
		numero=parseInt(prompt("Ingrese los numeros que guste"));
		suma=suma+numero;
		i++;
		seguir=prompt("Quiere ingresar otro número?");

	}while(seguir=="s");
	promedio=suma/i;
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;



}












/*{
	let seguir="s";
	while(seguir=="s"){

		alert("Hola");
		seguir=prompt("Quiere que lo vuelva a saludar?");
	}
	alert("No lo saludo más")
}//FIN DE LA FUNCIÓN*/