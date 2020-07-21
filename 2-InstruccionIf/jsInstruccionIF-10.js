function mostrar()
{
	let nota= Math.round(Math.random()*(10-1)+1);
	if (nota>=9)
	{//Genero el número RANDOM entre 1 y 10 
	alert("La nota es "+nota+" EXCELENTE");
	}
	else if (nota>4)
	{
		alert("La nota es "+nota+" APROBÓ");
	}
	else
	{
		alert("La nota es "+nota+" Vamos,la proxima se puede");
	}

}//FIN DE LA FUNCIÓN