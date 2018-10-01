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
		// agora o Date recebe um array
		let data = new Date(this._inputData.value.split('-'));
		console.log(data);

		//verificando o tipo
		//console.log(typeof(this._inputData.value));

		/*let negociacao = new Negociacao(
			this._inputData.value,
			parseInt(this._inputQuantidade.value),
			parseFloat(this._inputValor.value)
		);
		
		console.log(negociacao);
*/
	}
}
/*
function $_(element, unique = false) {
	if ( element.str('#') )
	{
		return document.getElementById(element);
	} else {
		if ( true === unique ) {
			return document.querySelector(element);
		}
		return Array.from(document.querySelectorAll(element)).forEach((element) => {
			console.log(as);
			element.addEventListener('click', (e) => {

			});
		});
	}	
}

$('.as').click(function(e) {

})

let as = document.querySelectorAll(element);
for ( let i=0; i < as.lenght-1; i++ ) { as[i].addEventListener }
*/