function mostrar() {
    let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	let precioBase = 15000;
	let precioFinal = 0;
	let plusVariable = 0;
	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					plusVariable=precioBase*0.20;
					precioFinal= precioBase+plusVariable;
					
				    break;
				case "Mar del plata":
					plusVariable=precioBase*0.20;
					precioFinal=precioBase-plusVariable;
					
					break;
				case "Cordoba":
				case "Cataratas":
					plusVariable=precioBase*0.10;
					precioFinal=precioBase-plusVariable;
					
				    break;
			}
			break;
		case "Verano":
			switch(destinoIngresado){
				case"Bariloche":
				plusVariable=precioBase*0.20;
				precioFinal=precioBase-plusVariable;
				break;
				
				case "Mar del plata":
				plusVariable=precioBase*0.20;
				precioFinal=precioBase+plusVariable;
				
				break;
				case "Cordoba":
				case "Cataratas":
				plusVariable=precioBase*0.10;
				precioFinal=precioBase+plusVariable;
				
				break;
				
			}
			break;
			case"Primavera":
			case"Otoño":
			switch(destinoIngresado){
				case "Cordoba":
					precioFinal=precioBase;
					
					break;
				default:
				plusVariable=precioBase*0.10;
				precioFinal=precioBase+plusVariable;
			    break;
				
			}
			break;
			}
			alert("El costo por su estadía es de $"+precioFinal);
			
		}