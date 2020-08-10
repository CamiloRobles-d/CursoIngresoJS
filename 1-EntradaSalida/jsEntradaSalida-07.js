/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let resultado;

	// El parseInt no es necesario ya solo son números, pero no está mal. Pero por más que funcione siempre hay que usarlo, ya que en C es obligatorio.

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 + numero2;

	alert("La suma es " + resultado );
	
}

function restar()
{
	let numero1;
	let	numero2;
	let resultado;
	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 - numero2;

	alert("La resta es " + resultado )

}
function multiplicar()
{ 
	let numero1;
	let	numero2;
	let resultado;
	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 * numero2;

	alert("La multiplicacion es " + resultado )
}

function dividir()
{
	let numero1;
	let	numero2;
	let resultado;
	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 / numero2;

	alert("La división es " + resultado )
}

