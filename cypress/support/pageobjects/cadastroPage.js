import CadastroLocator from '../locators/cadastroLocator'
const cadastroLocator = new CadastroLocator
const url = Cypress.config("baseUrl")

class CadastroPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
   
    // Ir para a tela de cadastro
    clickCadastro(){
       cy.get(cadastroLocator.fazerLogin()).click();
       cy.get(cadastroLocator.criarConta()).click();
    }
    
    // Acionar pesquisa
    clickBotaoPesquisaItem(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get(cadastroLocator.botaoPesquisar()).click();
    }

    
    // Inserir vaçlores válidos nos campos obrigatórios
    preencherValores(){
        cy.fixture('createLoginUserData').as('usuarioDados').then(function() { 

            cy.get(cadastroLocator.campoNome()).type(this.usuarioDados.nome)
            cy.get(cadastroLocator.campoEmail()).type(this.usuarioDados.email)
            cy.get(cadastroLocator.campoSenha()).type(this.usuarioDados.password)
            cy.get(cadastroLocator.campoConfirmacaoSenha()).type(this.usuarioDados.confirmarPassword)

            //cy.get(cadastroLocator.botaoContinuar()).click()            
        })
    }

    // Ir para a tela de cadastro
    visualizarSucesso(){
        cy.get(cadastroLocator.verificarEmail()).should('contain', 'Verificar e-mail');
    }
    
}

export default CadastroPage;