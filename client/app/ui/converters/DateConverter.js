class DateConverter {
	paraTexto(data){
		return data.getDate()
		+ '/' + (data.getMonth() + 1)
		+ '/' + data.getFullYear();
	}
	paraData(texto) {

	}
}