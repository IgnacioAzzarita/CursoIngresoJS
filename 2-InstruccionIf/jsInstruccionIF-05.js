function mostrar()
{
	let edad=parseInt(document.getElementById("txtIdEdad").value);
	if (edad<13 || edad>17)
	{//tomo la edad  
	alert("La persona no es adolescente");
	}

}//FIN DE LA FUNCIÓN