function mostrar()
{
	let numero;
	let contadorDivisores = 0;

	numero = parseInt(prompt("Ingrese un número: "));

	for(let i= 1; i< numero; i++){
		if(numero % 1 == 0){
			contadorDivisores++;

		}
	}
	if(contadorDivisores != 2){
		alert(numero + " no es primo");
	}
	else{
		alert( numero+" es primo");
	}
}//FIN DE LA FUNCIÓN