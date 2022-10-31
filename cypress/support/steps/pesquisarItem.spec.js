
import PesquisaItemPage from '../pageobjects/pesquisarItemPage'
const pesquisaItemPage = new PesquisaItemPage

Given("que eu acesse a página da Amazon ecommerce", () => {
    pesquisaItemPage.acessarSite();
})

And("clique no campo de pesquisa", () => {
    pesquisaItemPage.clickCampoPesquisaItem();
})

And("insira um {string} no campo pesquisa", (item) => {
    pesquisaItemPage.inserirConteudoItem(item);
})

And("acione o botão de pesquisar", () => {
    pesquisaItemPage.clickBotaoPesquisaItem();
})

And("clicar no item", () => {
    pesquisaItemPage.clickItem();
})

When("adicionar ao carrinho de compras", () => {
    pesquisaItemPage.clickAddItem();
})

Then("o item deverá ser incluído no carrinho com sucesso", () => {
    pesquisaItemPage.visualizarSucesso();
})


//3 Quantidades
Given("que eu acesse a página da Amazon ecommerce", () => {
    pesquisaItemPage.acessarSite();
})

And("clique no campo de pesquisa", () => {
    pesquisaItemPage.clickCampoPesquisaItem();
})

And("insira um {string} no campo pesquisa", (item) => {
    pesquisaItemPage.inserirConteudoItem(item);
})

And("acione o botão de pesquisar", () => {
    pesquisaItemPage.clickBotaoPesquisaItem();
})

And("clicar no item", () => {
    pesquisaItemPage.clickItem();
})

And("selecionar 3 quantidades", () => {
    pesquisaItemPage.qtdeItem();
})

When("adicionar ao carrinho de compras", () => {
    pesquisaItemPage.clickAddItem();
})

Then("o valor total do carrinho deverá ser equivatente a quantidade de itens", () => {
    pesquisaItemPage.visualizarValorTotal();
})
