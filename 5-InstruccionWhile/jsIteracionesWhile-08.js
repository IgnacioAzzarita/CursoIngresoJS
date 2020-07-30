/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let flag=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
	do{
		numero=parseInt(prompt("Ingrese los numeros que guste"));
		
		if(numero>=0){
		sumaPositivos=sumaPositivos+numero;}
		else{
			multiplicacionNegativos=multiplicacionNegativos*numero;	
			flag=1;
		}
		respuesta=prompt("Quiere ingresar otro número? Si así lo desea escriba si y luego ingrese su número");
	}while(respuesta=='si');
	if(flag==0){
		multiplicacionNegativos=0;}
		document.getElementById("txtIdProducto").value=multiplicacionNegativos;
	document.getElementById("txtIdSuma").value=sumaPositivos;
	}	
	
	

	


	

