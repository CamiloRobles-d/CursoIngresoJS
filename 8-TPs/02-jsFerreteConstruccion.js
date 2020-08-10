/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo = parseInt(document.getElementById("txtIdLargo").value);

    ancho = parseInt(document.getElementById("txtIdAncho").value);

    perimetro = (largo + ancho) * 2;

    alambre = perimetro * 3;

    alert ("Se necesitan " + alambre + " metros de alambre");

}   
function Circulo () 
{
    let radio;
    let perimetro;
    let alambre;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = (2*radio*Math.PI);

    alambre = perimetro * 3;

    alert ("Se necesitan " + alambre.toFixed(2) + " metros de alambre");
}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cemento;
    let cal;

    largo = parseInt(document.getElementById("txtIdLargo").value);

    ancho = parseInt(document.getElementById("txtIdAncho").value);

    area = largo * ancho ;

    
    cemento = area * 2 ;

    cal = area * 3 ,

    
    alert ("Se necesitan " + cemento + " de cemento y " + cal + " de cal.");

}