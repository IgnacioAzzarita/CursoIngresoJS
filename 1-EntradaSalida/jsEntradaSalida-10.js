/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe=parseInt(document.getElementById("txtIdImporte").value);
	var porcentaje= 0.25*importe;
	var descuento= importe-porcentaje;
	var inputResultado=document.getElementById("txtIdResultado");
	inputResultado.value=descuento;
}
