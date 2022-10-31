class PesquisaItemLocator {


    campoPesquisa = () => { return '#twotabsearchtextbox'}

    botaoPesquisar = () => {return '#nav-search-submit-button'}

    itemListado = () => {return '[data-asin="B004FMYZHI"] > .sg-col-inner'}

    addCarrinho = () => {return '#add-to-cart-button'}

    checkAdicionado = () => {return '.a-size-medium-plus'}

    checkAdicionadoCarrinho = () => {return '#nav-cart-count'}


    //3 quantidades
    selecionarQtdeItem = () => {return '#quantity'}

    valorUnitario =  () => {return '.ewc-unit-price > .a-size-base'}

    valorTotal =  () => {return '.ewc-subtotal-amount > .a-size-base'}

}

export default PesquisaItemLocator;