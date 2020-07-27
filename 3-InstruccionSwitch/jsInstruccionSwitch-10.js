function mostrar()
{
	let estacionIngresada=document.getElementById("txtIdEstacion").value;
	let destinoIngresado=document.getElementById("txtIdDestino").value;
	
	if (estacionIngresada == "Invierno"){
		if(destinoIngresado=="Bariloche"){
			alert("Se viaja");
		}
		else{
			alert("No se viaja");
		}
	}
	else if (estacionIngresada == "Verano"){
		if (destinoIngresado=="Mar del plata" || destinoIngresado == "Cataratas"){
		alert("Se viaja");
	}
		else{
			alert("No se viaja");
		}
	}
	
   else if(estacionIngresada=="Primavera"){
	   if(destinoIngresado!="Bariloche"){
	   alert ("Se viaja");
   }
      else {
	       alert("No se viaja");
        } 
   }

 else {
	 alert("Se viaja");

 }

   }
	



	
	
	
	
	
	
	
	
	
	
	/*switch(estacionIngresada){
		case "Invierno":
		switch(destinoIngresado){
		case "Bariloche":
			alert("Se viaja");
			break;
		default:
			alert("No se viaja");
			break;
		}
		break;
		case "Verano":
			switch(destinoIngresado){
				case "Bariloche":
				case "Cordoba":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
					break;
			}
				break;
		case "Otoño":
			alert("Se viaja");
			break;
		case "Primavera":
			switch(destinoIngresado){
				case"Bariloche":
				alert("No se viaja");
				break;
				default:
					alert("Se viaja");
					break;
			}
			break;
		
		
	
	}
	}*/
//FIN DE LA FUNCIÓN