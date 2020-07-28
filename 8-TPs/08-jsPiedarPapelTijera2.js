let eleccionMaquina;
let contadorDeEmpates=0;
let contadorDeGanadas=0;
let contadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.round(Math.random()*(3-1)+1);
	mostrarResultado();
	
	 	



}//FIN DE LA FUNCIÓN
function piedra()
{
	let piedra=1;
    if (eleccionMaquina==3){
		alert("Ganaste");
		contadorDeGanadas ++;
    }
    else if (piedra == eleccionMaquina) {
		alert("Empate");
		contadorDeEmpates ++;
    }
    else{
		contadorDePerdidas ++;
        alert("Perdiste");
	}
	comenzar();
	
	

}//FIN DE LA FUNCIÓN
function papel()
{
	let papel=2;
    if (eleccionMaquina==1){
		contadorDeGanadas ++;
        alert("Ganaste");
    }
    else if (papel == eleccionMaquina) {
		contadorDeEmpates ++;
        alert("Empate");
    }
    else{
		contadorDeEmpates ++;
        alert("Perdiste");
	}
	comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
	let tijera=3;
    if (eleccionMaquina==2){
		contadorDeGanadas ++;
        alert("Ganaste");
    }
    else if (tijera == eleccionMaquina) {
		contadorDeEmpates ++;
        alert("Empate");
    }
    else{
		contadorDePedidas ++;
        alert("Perdiste");
	}
	comenzar();
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	let inputGanadas=document.getElementById("txtIdGanadas");
	let inputPerdidas=document.getElementById("txtIdPerdidas");
	let inputEmpatadas=document.getElementById("txtIdEmpatadas");

	inputGanadas.value="Tus partidas ganadas son: "+contadorDeGanadas;
	inputEmpatadas.value="Tus partidas empatadas son: "+contadorDeEmpates;
	inputPerdidas.value="Tus partidas perdidas son: "+contadorDePerdidas;
    
}