function mostrar()
{
let numero=parseInt(prompt("Ingrese un numero"));
let contadorPares=0;
for(let i=0;i<=numero;i++){
    if(i%2==0){
        contadorPares++;
        console.log(i);
    }
    console.log("La cantidad de números pares es "+contadorPares);
}



}//FIN DE LA FUNCIÓN