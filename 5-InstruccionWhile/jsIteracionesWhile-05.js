/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("Ingrese su sexo (F o M)");
	while(sexo!="F" && sexo!="M" && sexo!="m" && sexo!="f"){
		sexo=prompt("Ingrese una letra valida! F si es femenino o M si es masculino");
	}
document.getElementById("txtIdSexo").value=sexo;
}//FIN DE LA FUNCIÓN