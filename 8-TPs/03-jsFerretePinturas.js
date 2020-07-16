/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit=parseFloat(document.getElementById("txtIdTemperatura").value);
    let centigrados = (fahrenheit-32) / 1.8;

    alert(`Esos ${fahrenheit} grados fahrenheit equivalen a ${centigrados.toFixed(1)} grados centigrados`)
	
}

function CentigradosFahrenheit () 
{
    let centigrados=parseFloat(document.getElementById("txtIdTemperatura").value);
    let fahrenheit= centigrados*1.8+32

    alert(`Esos ${centigrados} grados centigrados equivalen a ${fahrenheit.toFixed(4)} grados fahrenheit`);
}
