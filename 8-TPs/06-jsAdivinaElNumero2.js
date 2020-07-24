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
let flag;//variable bandera


function comenzar() {
	
numeroSecreto = Math.round(Math.random()* 99 + 1)
alert("lista, pense un numero.. trata de adivinarlo");
flag = 1;
contadorIntentos = 0;
document.getElementById("txtIdIntentos").value = contadorIntentos;

}
function  verificar()
{
  let numero;
  
   if(flag == 0){
     
    alert("Debes persionar primero el boton comenzar");

   
   }

   else{numero = parseInt(document.getElementById("txtIdNumero").value);
   contadorIntentos++;
   document.getElementById("txtIdIntentos").value = contadorIntentos;

   if(numero == numeroSecreto) {

	switch(contadorIntentos){
		case 1:
			alert("Usted es un psiquico");
			break;
		case 2:
			alert("Excelente percepción!");
			break;
		case 3:
			alert("Esto es suerte");
			break;
		case 4:
			alert("Excelente tecnica");
			break;
		case 5:
			alert("Usted esta en la media");
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			alert("Falta tecnica");
			break;
		default:
			alert("Afortundo en el amor...");

	
	
	}
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