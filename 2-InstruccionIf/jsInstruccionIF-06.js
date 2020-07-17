function mostrar()
{
	let edad=parseInt(document.getElementById("txtIdEdad").value);
	if (13<= edad && edad<=17)
	{//tomo la edad  
	alert("La persona es adolescente");
	}
	else if (edad<=12)
		{
		alert("La persona es un niño");
		}
    else 
		{
			alert("La persona es un adulta");
		}
    
	




}//FIN DE LA FUNCIÓN