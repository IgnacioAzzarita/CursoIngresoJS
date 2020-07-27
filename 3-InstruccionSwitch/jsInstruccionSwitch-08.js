function mostrar()
{
	let destino=document.getElementById("txtIdDestino").value;
	/*if(destino=="Bariloche" || destino == "Cordoba"){
	alert("Hace frío");
}
else{
	alert("Hace calor");
}
}*/



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
		
}//FIN DE LA FUNCIÓN*/