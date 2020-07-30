/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar(){
let numero;
let seguir;
let maximo;
let minimo;
let flag=0;
do{
	numero = parseInt(prompt("Ingrese un número: "));
	
	if(flag == 0){
		numero = maximo;
		numero = minimo;
		flag = 1;
	}
	if(numero > maximo){
		maximo = numero;
	}
	else if(numero < minimo){
		minimo = numero;
	}
	
	seguir = prompt("Quiere ingresar otro número? Si así lo desea escriba si y luego ingrese su número");
    
}while(seguir == "si");
document.getElementById("txtIdMaximo").value = maximo;
document.getElementById("txtIdMinimo").value = minimo;
}