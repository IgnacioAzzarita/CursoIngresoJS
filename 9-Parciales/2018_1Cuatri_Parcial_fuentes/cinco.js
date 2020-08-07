function mostrar()
{
let planeta=prompt("Ingrese en letra minúscula un planeta del sistema solar");
switch(planeta){
    case "tierra":
        alert("acá vivimos");
        break;
    case "mercurio":
    case "venus":
        alert("acá hace más calor");
        break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
        alert("acá hace más frío");
        break;
    
}
}
