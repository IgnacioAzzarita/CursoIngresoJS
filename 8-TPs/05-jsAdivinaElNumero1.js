/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos;
flag= 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.round(Math.random()* 99 + 1)
  alert("lista, pense un numero.. trata de adivinarlo");
  flag = 1;
  contadorIntentos = 0;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  document.getElementById("txtIdNumero").focus();
  
		//alert(numeroSecreto );
	

}

function verificar()
{
	let numero;
  
   if(flag == 0){
     
    alert("Debes persionar primero el boton comenzar");

   
   }
   else{numero = parseInt(document.getElementById("txtIdNumero").value);
   contadorIntentos++;
   document.getElementById("txtIdIntentos").value = contadorIntentos;

   if(numero == numeroSecreto) {

    alert(`Usted es un ganador!!! y en solo ${contadorIntentos} intentos`)
    contadorIntentos = 0;
    flag = 0;

   }

   else if (numero > numeroSecreto) {

    alert("Se paso...");
    
   }

   else { 
     alert("Le falta...");
   }
  }
   
document.getElementById("txtIdNumeros").value = "";
document.getElementById("txtIdNumero").focus();
}
	
