function mostrar() {
	// cargar 5 productos

	// Cada producto tiene:
	// tipo: Jabón, Barbijo, Alcohol. 
	// precio: Entre 100 y 300
	// cantidad: No puede ser cero o negativo ni superar las 1000 unidades
	// Marca
	// Fabricante

	//Obtener
	// A. Del alcohol más barato -> Cantidad de unidades y fabricante. 
	// B. Del tipo (barbijo, jabón o alcohol) que tenga + unidades -> El promedio por compra
	// C. Total de unidad de jabones

	let tipo;
	let precio;
	let cantidad;
	let cantidadMayor = 1;
	let tipoConMayorCantidad;
	let promedio;
	let precioCantidadMayor;
	let marca;
	let fabricante;
	let alcoholBarato;
	let alcoholBaratoPrecio;
	let alcoholBaratoCantidad = 0;
	let alcoholBaratoFabricante;
	let acumAlcohol=0;
	let contadorAlcohol=0;
	let acumJabon=0;
	let contadorJabon=0;
	let acumBarbijo=0;
	let contadorBarbijo=0;
	let flagAlcohol=0;

	for (let i = 0; i < 5; i++) {

		// Validar tipo.
		tipo = prompt("Ingrese el tipo de producto: Alcohol, Barbijo, Jabon.").toLowerCase();
		while (tipo != "alcohol" && tipo != "jabon" && tipo != "barbijo") {
			tipo = prompt("Incorrecto. Ingrese el tipo de producto: Alcohol, Barbijo, Jabon.").toLowerCase();
		}

		// Validar precio. 
		precio = parseFloat(prompt("Ingrese precio. Entre 100 y 300"));
		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = parseFloat(prompt("Incorrecto. Ingrese precio. Entre 100 y 300"));
		}

		// Validar Cantidad. 
		cantidad = parseInt(prompt("Ingrese cantidad. Entre 1 y 1000"));
		while (cantidad <= 0 || cantidad > 1000 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("Incorrecto. Ingrese cantidad. Entre 1 y 1000"));
		}
	   
		// Marca y Fabricante. 
		marca = prompt("Ingrese marca");
		fabricante = prompt("Ingrese fabricante");
	
		switch(tipo){
			case "alcohol":
				acumAlcohol+=cantidad;
				contadorAlcohol++;
				if(flagAlcohol==0 || precio<alcoholBaratoPrecio){
				alcoholBaratoPrecio=precio;
				alcoholBaratoPrecio=cantidad;
				alcoholBaratoFabricante=fabricante;
				flagAlcohol=1;
			}
				break;
			case "barbijo":
				acumBarbijo+=cantidad;
				contadorBarbijo++;
				break;
			case "jabon":
				acumJabon+=cantidad;
				contadorJabon++;
				break;

		}
	}
	if(acumAlcohol > acumBarbijo && acumAlcohol>acumJabon){
		tipoConMayorCantidad="Alcohol";
		promedio=acumAlcohol/contadorAlcohol;
	}
	else if(acumBarbijo >= acumAlcohol && acumBarbijo >acumJabon){
		tipoConMayorCantidad="Barbijo";
		promedio=acumBarbijo/contadorBarbijo;
	}
	else {
		tipoConMayorCantidad="Jabon";
		promedio=acumJabon/contadorJabon;
	}
	
    if(flagAlcohol==0){
		alert("No se compro alcohol");
	}
	else{
		alert("Datos alcohol barato: "+alcoholBaratoFabricante+ " Cantidad: "+alcoholBaratoCantidad+" Precio:$"+alcoholBaratoPrecio);
	}
	alert("El producto con mayores unidades es: " + tipoConMayorCantidad + ". El promedio de compra es igual a " + promedio + ".");
	alert("El total de unidades de jabones es de: " + cantidadDeJabones);
}
