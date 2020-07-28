let eleccionMaquina;
let contadorDeEmpates=0;
let contadorDeGanadas=0;
let contadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.round(Math.random()*(3-1)+1);
<<<<<<< HEAD
	mostrarResultado();
	
=======
>>>>>>> d57969b69225b3eeeebd1fa3477d67c0e5c2c8af
	 	



}//FIN DE LA FUNCIÓN
function piedra()
{
	let piedra=1;
    if (eleccionMaquina==3){
		alert("Ganaste");
<<<<<<< HEAD
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
	
=======
		contadorDeGanadas += 1;
    }
    else if (piedra == eleccionMaquina) {
		alert("Empate");
		contadorDeEmpates += 1;
    }
    else{
		contadorDePerdidas += 1;
        alert("Perdiste");
	}
	mostrarResultado();
>>>>>>> d57969b69225b3eeeebd1fa3477d67c0e5c2c8af
	

}//FIN DE LA FUNCIÓN
function papel()
{
	let papel=2;
    if (eleccionMaquina==1){
<<<<<<< HEAD
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
=======
		contadorDeGanadas += 1;
        alert("Ganaste");
    }
    else if (papel == eleccionMaquina) {
		contadorDeEmpates += 1;
        alert("Empate");
    }
    else{
		contadorDeEmpates += 1;
        alert("Perdiste");
	}
	mostrarResultado();
>>>>>>> d57969b69225b3eeeebd1fa3477d67c0e5c2c8af

}//FIN DE LA FUNCIÓN
function tijera()
{
	let tijera=3;
    if (eleccionMaquina==2){
<<<<<<< HEAD
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
=======
		contadorDeGanadas += 1;
        alert("Ganaste");
    }
    else if (tijera == eleccionMaquina) {
		contadorDeEmpates += 1;
        alert("Empate");
    }
    else{
		contadorDePedidas += 1;
        alert("Perdiste");
	}
	mostrarResultado();
>>>>>>> d57969b69225b3eeeebd1fa3477d67c0e5c2c8af
	
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