function mostrar(){
	let numero;
	let suma=0;
	let promedio;
	let i=0;
	while(i<5){
		numero=parseInt(prompt("Ingrese un numero"));
		suma=suma+numero;
		i++;
    }


	
	promedio=suma/5;
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;
}









/*{
	let numero1=parseInt(prompt("Ingrese un numero"));
	let numero2=parseInt(prompt("Ingrese un numero"));
	let numero3=parseInt(prompt("Ingrese un numero"));
	let numero4=parseInt(prompt("Ingrese un numero"));
	let numero5=parseInt(prompt("Ingrese un numero"));
	let suma=numero1+numero2+numero3+numero4+numero5;
	let promedio=suma/5;
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN*/