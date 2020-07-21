function mostrar()
{
	let destino=document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Cordoba":
			alert("Hace frío");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
			break;
	}
		
}//FIN DE LA FUNCIÓN