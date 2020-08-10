function mostrar()
{
	let nota;
	nota = Math.round(Math.random()* 9+1)

	if( nota <4){
		alert("Vamos, la proxima se puede "+nota)

	}
	else{
		if(nota>=4 && nota<9 ){
			alert("APROBÓ "+nota)
		}
		else{
			alert("EXCELENTE "+nota)
		}
	}

	

}//FIN DE LA FUNCIÓN