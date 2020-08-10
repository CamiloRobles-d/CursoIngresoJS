function mostrar()
{
	let i = 0;
	let numero;

	let suma = 0;
	let promedio;

	while(i<5){

		numero = parseInt(prompt("Ingrese un número: "));

		suma = suma + numero;

		i = i + 1;

	}


	promedio =suma /5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;















	/*
	let numero1;
	let numero2;
	let numero3;
	let numero4;
	let numero5;
	let suma;
	let promedio;

	numero1 = parseInt(prompt("Ingrese un número: "));
	numero2 = parseInt(prompt("Ingrese un número: "));
	numero3 = parseInt(prompt("Ingrese un número: "));
	numero4 = parseInt(prompt("Ingrese un número: "));
	numero5 = parseInt(prompt("Ingrese un número: "));
	
	suma = numero1 + numero2 + numero3 + numero4 + numero5;
	promedio =suma /5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
*/
}//FIN DE LA FUNCIÓN