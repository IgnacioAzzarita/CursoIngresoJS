function mostrar()
{
let precio=parseFloat(prompt("Ingrese un precio"));
let porcentajeDescuento=parseInt(prompt("Ingrese el descuento que desea aplicar"));
let descuento= porcentajeDescuento*precio/100;
let precioFinal= precio - descuento;
document.getElementById("elPrecioFinal").value=precioFinal;
}
