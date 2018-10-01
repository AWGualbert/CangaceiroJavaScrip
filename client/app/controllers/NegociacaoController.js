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

		//o constructor esta recebendo uma string. Será que funciona?
		// usamos os famosos três pontinhos!
		let data = new Date(...this._inputData
			.value.split('-')
			.map((item, indice) => item - indice % 2)
			//function(){} é substituido por =>
		);

		let negociacao = new Negociacao(
			data,
			parseInt(this._inputQuantidade.value),
			parseFloat(this._inputValor.value)
		);

		let diaMesAno = negociacao.data.getDate()
		+ '/' + (negociacao.data.getMonth() + 1)
		+ '/' + negociacao.data.getFullYear();

		console.log(diaMesAno);

	}
}

