
import CadastroPage from '../pageobjects/cadastroPage'
const cadastroPage = new CadastroPage

Given("a pagina da Amazon ecommerce esteja no menu principal", () => {
    cadastroPage.acessarSite();
})

And("acione o menu de cadastro", () => {
    cadastroPage.clickCadastro();
})


When("prencher os valores", () => {
    cadastroPage.preencherValores();
})

Then("todos os campos estaram preenchidos", () => {
    cadastroPage.visualizarSucesso();
})