/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe=parseFloat(document.getElementById("txtIdImporte").value);
	let porcentaje= 0.25*importe;
	let descuento= importe-porcentaje;
	document.getElementById("txtIdResultado").value= descuento.toFixed(2);
	
}
