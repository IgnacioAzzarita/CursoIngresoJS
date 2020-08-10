function mostrar()
{
let precio=parseFloat(prompt("Ingrese el precio"));
let porcentaje=parseInt(prompt("Ingrese el porcentaje a descontar"));
let descuento=precio*porcentaje/100;
let precioFinal=precio-descuento;
document.getElementById("elPrecioFinal").value=precioFinal;
}
