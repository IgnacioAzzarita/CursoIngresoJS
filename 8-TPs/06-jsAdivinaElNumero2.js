/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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

   switch()
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