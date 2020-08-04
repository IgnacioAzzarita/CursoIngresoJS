function mostrar()
{
	let numero=parseInt(prompt("Ingrese un número"));
	let contadorDivisores=0;
	for(let i=0;i<=numero;i++){
		if(numero%i==0){
			contadorDivisores++
			console.log(i);
		}
	console.log("La cantidad de divisores es "+contadorDivisores);
	}


}//FIN DE LA FUNCIÓN