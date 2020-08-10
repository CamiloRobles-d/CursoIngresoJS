function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case"Julio":
		case"Agosto":
		alert("Abrigate que hace frio");
		break;
		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		alert("Ya pasamos el frio, ahora calor!!!");
		break;
		case"Enero":
		case"Febrero":
		case"Marzo":
		case"Abril":
		case"Junio":
		case"Mayo":
		alert("Falta para el invierno");
		break;
	}


}