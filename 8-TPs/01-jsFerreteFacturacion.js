/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
    let suma= precio1+precio2+precio3;

    alert("El valor de la suma de los 3 precios es $"+suma.toFixed(2));
}
function Promedio () 
{
    let precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
    let promedio= (precio1+precio2+precio3) / 3;

    alert ("El promedio de los precios es $"+promedio.toFixed(2));
	
}
function PrecioFinal () 
{
    let precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
    let suma= precio1+precio2+precio3;
    let iva= suma * 0.21;
    let preciofinal= suma+iva;

    alert("El precio final es $"+preciofinal.toFixed(2));
	
}