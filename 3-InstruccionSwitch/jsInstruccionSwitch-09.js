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
					alert("El costo por su estadía es de $"+precioFinal);
					break;
				case "Mar del plata":
					plusVariable=precioBase*0.20;
					precioFinal=precioBase-plusVariable;
					alert("El costo por su estadía es de $"+precioFinal);
					break;
				case "Cordoba":
				case "Cataratas":
					plusVariable=precioBase*0.10;
					precioFinal=precioBase-plusVariable;
					alert("El costo por su estadía es de $"+precioFinal);
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado){
				case"Bariloche":
				plusVariable=precioBase*0.20;
				precioFinal=precioBase-plusVariable;
				alert("El costo por su estadía es de $"+precioFinal);
				break;
				case "Mar del plata":
				plusVariable=precioBase*0.20;
				precioFinal=precioBase+plusVariable;
				alert("El costo por su estadía es de $"+precioFinal);
				break;
				case "Cordoba":
				case "Cataratas":
				plusVariable=precioBase*0.10;
				precioFinal=precioBase-plusVariable;
				alert("El costo por su estadía es de $"+precioFinal);
				break;
			}
			break;
			case"Primavera":
			case"Otoño":
			switch(destinoIngresado){
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
				plusVariable=precioBase*0.10;
				precioFinal=precioBase+plusVariable;
				alert("El costo por su estadía es de $"+precioFinal);
				break;
				case "Cordoba":
					alert("El costo por su estadía es de $"+precioFinal);
					break
			}
			break;

			}
		}