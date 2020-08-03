/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = parseInt(prompt("Ingrese un número entre 0 y 9"));
	while(numero<0 || numero>9 || isNaN(numero)){
	numero = parseInt(prompt("El numero es incorrecto!!! Por favor ingrese un número entre 0 y 9"));
	}
	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN