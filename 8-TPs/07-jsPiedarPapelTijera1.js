/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;

function comenzar()
{
    eleccionMaquina = Math.round(Math.random()*(3-1)+1);
    


}//FIN DE LA FUNCIÓN
function piedra()
{
    let piedra=1;
    if (eleccionMaquina==3){
        alert("Ganaste");
    }
    else if (piedra == eleccionMaquina) {
        alert("Empate");
    }
    else{
        alert("Perdiste");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    let papel=2;
    if (eleccionMaquina==1){
        alert("Ganaste");
    }
    else if (papel == eleccionMaquina) {
        alert("Empate");
    }
    else{
        alert("Perdiste");
    }


}//FIN DE LA FUNCIÓN
function tijera()
{
    let tijera=3;
    if (eleccionMaquina==2){
        alert("Ganaste");
    }
    else if (tijera == eleccionMaquina) {
        alert("Empate");
    }
    else{
        alert("Perdiste");
    }

	

}//FIN DE LA FUNCIÓN