function mostrar()
{
	let numero=parseInt(prompt("Ingrese un número"));
	if(numero< 2){
		console.log("No es primo");
	}
	for(let i=2;i<=numero;i++){
		if(numero%i==0){
			console.log("No es primo");
		}
		else{
		console.log("Es primo");
		}
	}


	

}//FIN DE LA FUNCIÓN