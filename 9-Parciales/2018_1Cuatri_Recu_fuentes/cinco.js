function mostrar()
{
let dia=prompt("Ingrese un día de la semana".toLowerCase());
let mensaje;


switch(dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        mensaje="A trabajar";
        break;
    case "sabado":
    case "domingo":
        mensaje="Buen finde";
        break;
    default:
        mensaje="Dato invalido";
        break;

}
alert(mensaje);
}
