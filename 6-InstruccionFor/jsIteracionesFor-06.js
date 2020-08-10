function mostrar()
{
	let numero;
	let contadorPar = 0;

	numero = parseInt(prompt("Ingrese un número: "));

	for(let i= 1; i< numero; i++){
		if(i % 2 == 0){
			console.log(i);
			contadorPar++;

		}
	}
console.log("cantidad de pares encontrados" + contadorPar);
}//FIN DE LA FUNCIÓN