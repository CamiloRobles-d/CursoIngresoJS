function mostrar()
{
	let estacion;
	let destino;
	let descuento;
	let aumento;

	estacion = document.getElementById("txtIdEstacion").value;

	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){

	case"Invierno":
		if(destino == "Bariloche"){
			aumento = 20;
		}
		else{
			if(destino == "Cataratas" || destino == "Cordoba"){
				descuento = 10;
			}
			else{
				descuento = 20;
			}
		}
	break;

	case"Verano":
		if(destino == "Mar del plata"){
			aumento = 20;
		}
		else{
			if(destino == "Cataratas" || destino == "Cordoba"){
				aumento = 10;
			}
			else{
				descuento = 20;
			}
		}
	default:
		if(destino == "Bariloche"){
			aumento = 10;
		}
		else{
			if(destino == "Cataratas" || destino == "Mar del plata"){
				descuento = 10;
			}
			else{
				
			}
		}



	}
}
//FIN DE LA FUNCIÓN