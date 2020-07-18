function mostrar()
{
	let edad=parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil=document.getElementById("estadoCivil").value;

	if (edad>=18 && estadoCivil !="Soltero")
	{//tomo la edad  
	
	}
	else if (estadoCivil=="Soltero" && edad>=19)
	{
		alert("Es soltero y no es menor")
	}
	else
	{
		
	}
	


}//FIN DE LA FUNCIÓN