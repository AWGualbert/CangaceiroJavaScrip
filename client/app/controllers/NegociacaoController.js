class NegociacaoController {

	constructor(){

		//a ideia é que $ seja o querySelector :D
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');

		// buscando os elementos
		this. _inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona(event) {
		// cancelando a submissão do formulário
		event.preventDefault();

		//Chamando o método estático
			let negociacao = new Negociacao(
			DateConverter.paraData(this._inputData.value),
			parseInt(this._inputQuantidade.value),
			parseFloat(this._inputValor.value)
		);

		console.log(negociacao.data);

		//Chamando o método estático
		let diaMesAno = DateConverter.paraTexto(negociacao.data);
		console.log(diaMesAno);

		
	}
}

