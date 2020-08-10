function mostrar()
{
let precio=parseFloat(prompt("Ingrese el precio"));
let porcentaje=parseInt(prompt("Ingrese el porcentaje que desea descontar"));
let precioFinal=precio*porcentaje/100;
document.getElementById("elPrecioFinal").value=precioFinal
}
