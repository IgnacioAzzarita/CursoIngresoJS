function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;
	let temperaturaMasAlta;
	let flagTemperatura=0;
	let nacionalidadMasAlta;
	let contadorMayoresSolteros=0;
	let contadorMujeresSoV=0;
	let contadorAncianos38=0;
	let promedioEdadCasadas=0;
	let acumEdadCasadas=0;
	let contadorCasadas=0;

	do{
	nombre=prompt("Ingrese nombre");
	nacionalidad=prompt("Ingrese nacionalidad");
	edad=parseInt(prompt("Ingrese su edad"));
	temperaturaCorporal=parseFloat(prompt("Ingrese su temperatura corporal"));
	sexo=prompt("Ingrese m si es varón y f si es mujer".toLowerCase());
	while(sexo!="m" && sexo!="f"){
		sexo=prompt("Letra invalida! Ingrese m si es varón y f si es mujer".toLowerCase());
	}
	estadoCivil=prompt("Ingrese su estado civil");
	while(estadoCivil!="soltero" && estadoCivil!="soltera" && estadoCivil!="casado"&& estadoCivil!="casada" && estadoCivil!="viudo" && estadoCivil!="viuda"){
		estadoCivil=prompt("Estado civil invalido! Ingrese su estado civil");
	}
if(flagTemperatura==0 || temperaturaCorporal>temperaturaMasAlta){
  temperaturaMasAlta=temperaturaCorporal;
  nacionalidadMasAlta=nacionalidad;
  flagTemperatura=1;
}
if(edad>17 && estadoCivil=="soltero"){
	contadorMayoresSolteros++
}
if(sexo=="f" && estadoCivil=="soltera" ||estadoCivil=="viuda" ){
contadorMujeresSoV++
}
if(edad>60 && temperaturaCorporal > 38){
	contadorAncianos38++
}
if(sexo=="f" && estadoCivil=="casada"){
	acumEdadCasadas+=edad;
	contadorCasadas++
}
respuesta=prompt("Ingrese si, si quiere poner mas datos");
	}while(respuesta=="si");
promedioEdadCasadas=acumEdadCasadas/contadorCasadas;
alert("La nacionalidad de la persona con mas temperatura es "+nacionalidadMasAlta);
alert("Hay "+contadorMayoresSolteros+" mayores solteros");
alert("Hay "+contadorMujeresSoV+" mujeres solteras o viudas");
alert("Hay "+contadorAncianos38+" ancianos con altas temperaturas");
alert("El promedio de edad de mujeres casadas es de "+promedioEdadCasadas);
}
