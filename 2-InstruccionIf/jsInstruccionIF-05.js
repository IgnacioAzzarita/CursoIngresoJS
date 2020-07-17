function mostrar()
{
	let edad=parseInt(document.getElementById("txtIdEdad").value);
	if (edad<12 || edad>18)
	{//tomo la edad  
	alert("La persona no es adolescente");
	}

}//FIN DE LA FUNCIÓN