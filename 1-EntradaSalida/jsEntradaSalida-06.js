/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1 = 30;
	let numero2 = 20;
	let resultado;

	//"30"
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	/*
	numero1 = parseInt(numero1); 
	*/
	//"20"
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	/*
	numero2 = parseInt(numero2);
	*/



	resultado = numero1 + numero2;

	alert("La suma es " + resultado );

}


