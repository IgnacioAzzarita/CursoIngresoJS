function mostrar()
{
let continente=document.getElementById("Marca").value;
let cantidad=parseInt("Ingrese la cantidad de días que desea viajar");
let precioDia=100;
let descuento=prompt("Ingrese medio de pago. Puede ser Efectivo,MercadoPago o Debito");
let descMerc;
let descDebito;
let descuentoTotal;
let descEfec;
let recargo=20;
switch(continente){
case "America":
    switch(descuento){
        case "Efectivo":
        case "Mercado Pago":
         descuentoTotal=50;
            alert("El descuento es del "+descuentoTotal+" por ciento");
            break;
        case "Debito":
            descuentoTotal=60;
            alert("El descuento total es del "+descuentoTotal+" por ciento");
            break;
    }
    break;
    
case "Africa":
    switch(descuento){
    case "Debito":
        descuentoTotal=60;
        alert("El descuento total es del "+descuentoTotal+" por ciento")
    break;
    case "MercadoPago":
    case "Efectivo":
        descuentoTotal=75;
    alert("Si abona con MercadoPago o efectivo el descuento total es del "+descuentoTotal+" por ciento");
    break;
    }
    break;
case "Europa":
   switch(descuento){
       case"Mercado Pago":
       descuentoTotal=30;
       alert("Si abona con Mercado Pago el descuento es del "+descuentoTotal+"%");
       break;
       case "Debito":
       descuentoTotal=35;
       alert("Si abona con Debito el descuento es del "+descuentoTotal+"%");
       break;
       case "Efectivo":
           descuentoTotal=25;
           alert("Si abona con Efectivo el descuento es del "+descuentoTotal+"%");
break;
   }
break;
default:
    recargo=20;
}
}
