/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada=parseInt(prompt("Ingrese su edad"));
 	let sexoIngresado=prompt("Ingrese F para femenino o M para masculino");
	let estadoCivilIngresado=prompt("Ingrese su Estado Civil:1-para soltero, 2-para casados, 3-para divorciados y 4-para viudo");
	let sueldoIngresado=parseInt(prompt("Ingrese su sueldo"));
	let legajo=parseInt(prompt("Ingrese su número de legajo"));
	let nacionalidad=prompt("Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

	while(edadIngresada<18 || edadIngresada>90 || isNaN(edadIngresada)){
		edadIngresada=parseInt(prompt("Error. Tiene que ser mayor de 18 años o menor de 90 años"));
	}
	while(sexoIngresado!="m" && sexoIngresado!="M" && sexoIngresado!="f" && sexoIngresado!="F"){
		let sexoIngresado=prompt("Letra invalidad. Ingrese F para femenino o M para masculino");
	}
	while(sexoIngresado=="m" || sexoIngresado=="M"){
		sexoIngresado="Masculino";
	}
	while(sexoIngresado=="f" || sexoIngresado=="F"){
		sexoIngresado="Femenino";
	}
	while(estadoCivilIngresado>4 || isNaN(estadoCivilIngresado)){
		let estadoCivilIngresado=prompt("Ingrese una opción valida");
	}
	while(estadoCivilIngresado<=4){
		if(estadoCivilIngresado==1){
        estadoCivilIngresado="Soltero";
		}
		if(estadoCivilIngresado==2){
			estadoCivilIngresado="Casado";
		}
		if(estadoCivilIngresado==3){
			estadoCivilIngresado="Divorciado";
		}
		if(estadoCivilIngresado==4){
			estadoCivilIngresado="Viudo";
		}
	while(sueldoIngresado<8000 || isNaN(sueldoIngresado)){
		let sueldoIngresado=parseInt(prompt("El sueldo debe ser mayor a $8000"));
	}
	while(legajo<1000 || legajo>9999 || isNaN(legajo)){
		legajo=parseInt(prompt("El legado debe ser mayor a 1000"));
	}
	while(nacionalidad!="A" && nacionalidad!="a" && nacionalidad!="n" && nacionalidad!="N" && nacionalidad!="e" && nacionalidad!="E"){
		nacionalidad=prompt("Dato invalido! Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
	}
	while(nacionalidad=="A" || nacionalidad=="a"){
		nacionalidad="Argentino";
	}
	while(nacionalidad=="E" || nacionalidad=="e"){
		nacionalidad="Extranjero";
	}
    while(nacionalidad=="n" || nacionalidad=="N"){
		nacionalidad="Nacionalizado";
	}
	
		
	
	
	document.getElementById("txtIdEdad").value=edadIngresada;
	document.getElementById("txtIdSexo").value=sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value=estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value=sueldoIngresado;
	document.getElementById("txtIdLegajo").value=legajo;
	document.getElementById("txtIdNacionalidad").value=nacionalidad;


}
}
