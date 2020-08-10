/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let centigrados;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    centigrados = (fahrenheit - 32) * 5/9 ;

    alert (`${centigrados.toFixed(2)} grados Fahrenheit`);
}

function CentigradosFahrenheit () 
{
    let fahrenheit;
    let centigrados;

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit = centigrados * 1.8 + 32 ;

    alert (fahrenheit.toFixed(2)) ;
}
