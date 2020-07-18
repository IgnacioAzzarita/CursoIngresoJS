function mostrar()
{
	let aleatorio= Math.floor(Math.random()*10);
	if (aleatorio>=9)
	{//Genero el número RANDOM entre 1 y 10 
	alert("La nota es "+aleatorio+" EXCELENTE");
	}
	else if (aleatorio>4)
	{
		alert("La nota es "+aleatorio+" APROBÓ");
	}
	else
	{
		alert("La nota es "+aleatorio+" Vamos,la proxima se puede");
	}

}//FIN DE LA FUNCIÓN