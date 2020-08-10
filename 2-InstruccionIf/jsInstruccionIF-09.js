function mostrar()
{
	let numertoAleatorio;
	let maximo = 6;
	let minimo = 1;

	numertoAleatorio = Math.round(Math.random() * (maximo - minimo) + minimo);
	
	alert(numertoAleatorio);
}//FIN DE LA FUNCIÓN