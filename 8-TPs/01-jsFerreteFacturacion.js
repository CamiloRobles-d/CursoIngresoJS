/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let preciouno;
    let preciodos;
    let preciotres;
    let resultado;

    preciouno = parseFloat(document.getElementById("txtIdPrecioUno").value);

    preciodos = parseFloat(document.getElementById("txtIdPrecioDos").value);

    preciotres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = preciouno + preciodos + preciotres;

    alert (("La suma es $") + resultado.toFixed(2)) ;

}
function Promedio () 
{
    let preciouno;
    let preciodos;
    let preciotres;
    let resultado;

    preciouno = parseFloat(document.getElementById("txtIdPrecioUno").value);

    preciodos = parseFloat(document.getElementById("txtIdPrecioDos").value);

    preciotres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = ((preciouno + preciodos + preciotres) / 3);

    alert (("El promedio es $") + resultado.toFixed(2)) ;
}
function PrecioFinal () 
{
    let preciouno;
    let preciodos;
    let preciotres;
    let resultado;
    let suma;

    preciouno = parseFloat(document.getElementById("txtIdPrecioUno").value);

    preciodos = parseFloat(document.getElementById("txtIdPrecioDos").value);

    preciotres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = preciouno + preciodos + preciotres ;

    resultado = suma + suma * (21/100);

    alert (("El precio final es $") + resultado.toFixed(2)) ;
}