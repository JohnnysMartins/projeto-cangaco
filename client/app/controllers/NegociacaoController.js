class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => {
                    console.log(item + " na posicao: " + indice);
                    return indice == 1 ? item - 1 : item
                }));
        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
        console.log(negociacao);

    }

}